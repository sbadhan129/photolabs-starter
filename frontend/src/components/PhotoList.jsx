import React from "react";
import PhotoListItem from './PhotoListItem';
import "../styles/PhotoList.scss";

const PhotoList = ({ photos, favorites, onPhotoClick }) => {
  
   // Log the favorites for debugging purposes.
  console.log("favorites", favorites)
  return (
    <div className="photo-list">
      {photos.map(photo => (
        <PhotoListItem 
            key={photo.id}
            id={photo.id}
            user={photo.user}
            urls={photo.urls}
            location={photo.location}  
            isFavorite={favorites?.includes(photo.id)}
            onPhotoClick={() => onPhotoClick(photo)}
        />
      ))}
    </div>
  );
};

export default PhotoList;