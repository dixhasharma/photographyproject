import React from "react";
import "../Styles/Modal.css";
const Modal = ({ photo, setModalData }) => {
  console.log(photo);
  return (
    <>
      <div
        className="modal-backdrop"
        onClick={() => {
          setModalData(null);
        }}
      >
        <div className="modal-card">
          <div className="modal-image">
            <img
              src={photo === null ? "" : photo.urls.full}
              alt={photo === null ? "" : photo.alt_description}
            />
          </div>
          <div className="modal-info">
            <img
              src={photo.user.profile_image.medium}
              alt=""
              style={{ borderRadius: "50%" }}
            />
            <span>Posted By{photo.user.name}</span>
            <span>Instagram: @{photo.user.social.instagram_username}</span>
            <span>Twitter@{photo.user.social.twitter_username}</span>
            <span>Likes:{photo.likes}</span>
            <span>
              Posted On: {new Date(photo.created_at).toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
