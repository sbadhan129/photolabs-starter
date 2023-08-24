import React, { useCallback } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';
import { usePhotoContext } from './PhotoContext'; // Assuming you have this file and the mentioned exports

function PhotoFavButton({ photoId, click }) {
  const { favorites, setFavorites } = usePhotoContext();
  
  const handleFavClick = useCallback((event) => {
    event.stopPropagation();  
    const isFavorited = favorites.includes(photoId);

    if (isFavorited) {
      setFavorites(prevFavorites => prevFavorites.filter(id => id !== photoId));
    } else {
      setFavorites(prevFavorites => [...prevFavorites, photoId]);
    }
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