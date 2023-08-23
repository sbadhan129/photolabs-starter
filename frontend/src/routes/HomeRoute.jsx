import React from 'react';
import TopNavigation from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import { usePhotoContext } from '../components/PhotoContext';  // Assuming you've set up this context
import '../styles/HomeRoute.scss';

const HomeRoute = ({ photos, topics, openModal }) => {
  const { favorites, setFavorites } = usePhotoContext();
console.log("favorites in home", favorites)

  const setFavorite = (photoId) => {
    if (favorites.includes(photoId)) {
      setFavorites(prev => prev.filter(id => id !== photoId));
    } else {
      setFavorites(prev => [...prev, photoId]);
    }
  };

  return (
    <div className="home-route">
      <TopNavigation topics={topics} />
      <PhotoList photos={photos} setFavorite={setFavorite} favorites={favorites} onPhotoClick={openModal} />
    </div>
  );
};

export default HomeRoute;