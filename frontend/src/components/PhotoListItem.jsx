import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({ id, user, urls, location, click, isFavorite, onPhotoClick }) => {
  const { username, profile } = user;
  const imageSource = urls.regular;

  return (
    <div className="photo-list-item" data-id={id} onClick={onPhotoClick}>
      <PhotoFavButton photoId={id} click={click}/>
      <img 
        src={imageSource} 
        alt={`Photo taken in ${location.city}, ${location.country}`} 
        className="photo-list-image" 
      />
      <div className="photo-list-user-details">
        <img 
          src={profile} 
          alt={`${username}'s profile`} 
          className="photo-list-user-profile" 
        />
        <div>
          <span className="photo-list-user-info">{username}</span>
          <div className="photo-list-user-location">
            {location.city}, {location.country}
          </div>
        </div>
      </div>
      {isFavorite && <span>❤️</span>}
    </div>
  );
}

export default PhotoListItem;