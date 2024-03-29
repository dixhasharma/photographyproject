import React, { useState } from "react";
import { StyleSheet, css } from "aphrodite/no-important";
import buttonStyle from "../Styles/ButtonStyle";
import download from "../images/download_icon.png";
import "../Styles/hideStyle.css";
import Modal from "./Modal";
const phtoStyle = StyleSheet.create({
  heartIcon: {
    color: "#f54b48",
  },
  imageStyle: {
    width: "100%",
    display: "block",
    borderRadius: "2px",
  },
  buttonMargin: {
    "margin-left": "8px",
  },
  fullNameCss: {
    color: "white",
    position: "relative",
    top: "5px",
  },
  userIcon: {
    "border-radius": "18px",
  },
  downloadIcon: {
    width: "20px",
    height: "18px",
    "border-radius": "4px",
    "padding-top": "7px",
    "justify-content": "center",
  },
});
const Photo = ({
  photo,
  photoUrl,
  likes,
  profilePhoto,
  firstName,
  lastName,
  downloadUrl,
}) => {
  const [modalData,setModalData] = useState(null);
  return (
    <>
      <div className="unplashPhtoDiv" onClick={()=>{setModalData(photo)}}>
        <div className="likeDiv">
          <div className={css(buttonStyle.button)}>
            <span className={css(phtoStyle.heartIcon)}>
              <i className="fas fa-heart" />
            </span>{" "}
            {likes}
          </div>
          <div className={css(buttonStyle.button, phtoStyle.buttonMargin)}>
            <i className="fas fa-plus" /> Collect
          </div>
        </div>
        <img src={photoUrl} className={css(phtoStyle.imageStyle)} alt="" />
        <div className="footerDiv">
          <img src={profilePhoto} className={css(phtoStyle.userIcon)} alt="" />
          <div className={css(phtoStyle.buttonMargin)}>
            <span
              className={css(phtoStyle.fullNameCss)}
            >{`${firstName} ${lastName}`}</span>
          </div>
        </div>
        <div className="downloadPhoto">
          <a
            className={css(buttonStyle.button)}
            href={`${downloadUrl}?force=true`}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={download}
              className={css(phtoStyle.downloadIcon)}
              alt=""
            />
          </a>
        </div>
      </div>
      {modalData===null?"":<Modal photo={modalData} setModalData={setModalData} />}
    </>
  );
};
export default Photo;
