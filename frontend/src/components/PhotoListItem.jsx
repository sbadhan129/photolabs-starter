import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({ id, user, urls, location, click, isFavorite, onPhotoClick }) => {
  
  // Destructuring to get the necessary properties from the user object.
  const { username, profile } = user;

  // Extract the regular resolution image URL for display.
  const imageSource = urls.regular;

  return (
    
    <div className="photo-list-item" data-id={id} onClick={onPhotoClick}>
      
      {/* Favorite button to mark/unmark photo as favorite */}
      <PhotoFavButton photoId={id} click={click}/>


      {/* The main photo image */}
      <img 
        src={imageSource} 
        alt={`Photo taken in ${location.city}, ${location.country}`} 
        className="photo-list-image" 
      />

      {/* User details section - profile image, username, and location */}
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
      {/* Display a heart icon if the photo is marked as a favorite */}
      {isFavorite && <span>❤️</span>}
    </div>
  );
}

export default PhotoListItem;