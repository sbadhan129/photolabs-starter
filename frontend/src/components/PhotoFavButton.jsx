import React, { useCallback } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';
import { usePhotoContext } from './PhotoContext'; // Assuming you have this file and the mentioned exports

function PhotoFavButton({ photoId, click }) {

  // Access the favorites and its setter function from the context.
  const { favorites, setFavorites } = usePhotoContext();
  
  const handleFavClick = useCallback((event) => {
    // Prevent the event from bubbling up to parent elements.
    event.stopPropagation();  
    // Check if the photo is already favorited.
    const isFavorited = favorites.includes(photoId);

    // Toggle the photo's favorite status based on its current status.
    if (isFavorited) {
      setFavorites(prevFavorites => prevFavorites.filter(id => id !== photoId));
    } else {
      setFavorites(prevFavorites => [...prevFavorites, photoId]);
    }

    // Log the updated favorites for debugging purposes.
    console.log("Updated favorites:", favorites);
  }, [photoId, favorites, setFavorites]);

  return (
    <div className="photo-list__fav-icon" onClick={handleFavClick}>
      <div className="photo-list__fav-icon-svg" onClick={click}>
        <FavIcon selected={favorites.includes(photoId)}  />
      </div>
    </div>
  );
}

export default PhotoFavButton;