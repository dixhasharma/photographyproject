import React, { useState, useEffect, useCallback } from "react";
import Loader from "./Components/Loader";
import Masonry from "react-responsive-masonry";
import Navbar from "./Components/Navbar";
import Photo from "./Components/Photo";
import { css } from "aphrodite";
import navStyle from "./Styles/NavbarStyle";
import Cover from "./Components/Cover";

const App = () => {
  const [search,setSearch] = useState();
  const [photosData, setPhotosData] = useState({
    photos: [],
    page: 1,
    perPage: 20,
    isLoading: false,
  });
  const fetchPhotos = useCallback((page, perPage,search) => {
    fetch(
      `https://api.unsplash.com/search/photos?query=${search}&page=${page}&per_page=${perPage}&client_id=SvLnhJjxfgHEe8tGlwnS292yEEql3ViHpG4Hl3XjC80`
    ).then((data) => {
      if (data) {
        return data.json()
      }
    }).then(d=>setPhotosData( {photos: [...d.results],
    page: 1,
    perPage: 20,
    isLoading: false}));
  }, []);
  useEffect(() => {
    fetchPhotos(1, 50,search);
    // window.addEventListener("scroll", handleScroll);
    // return () => {
    //   window.removeEventListener("scroll", handleScroll);
    // };
  });

  // const handleScroll = () => {
  //   if (
  //     window.innerHeight + window.scrollY >= document.body.offsetHeight - 300 &&
  //     !photosData.isLoading
  //   ) {
  //     setPhotosData((prev) => ({
  //       ...prev,
  //       page: prev.page + 1,
  //       isLoading: true,
  //     }));
  //     fetchPhotos(photosData.page + 1, 50, "Dogs");
  //   }
  // };

  const { photos, isLoading } = photosData;
  let loader;
  if (photos.length < 0 || isLoading) {
    return (
      <div className="app">
        <Navbar />
        <Cover />
        <Loader/>
      </div>
    );
  } else {
    return (
      <div className="app">
        <Navbar setSearch={setSearch}/>
        <Cover setSearch={setSearch}/>
        <div className={css(navStyle.marginPhotos)}>
          <Masonry columnsCount={2} gutter="10px">
            {photos.length &&
              photos.map((photo, i) => (
                <Photo
                  photo={photo}
                  key={i}
                  photoUrl={photo.urls.small}
                  likes={photo.likes}
                  firstName={photo.user.first_name}
                  lastName={photo.user.last_name}
                  downloadUrl={photo.links.download}
                  profilePhoto={photo.user.profile_image.small}
                />
              ))}
          </Masonry>
        </div>
        {loader}
      </div>
    );
  }
};

export default App;
