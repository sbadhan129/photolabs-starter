import React from 'react';
import TopNavigation from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import { usePhotoContext } from '../components/PhotoContext';  // Assuming you've set up this context
import '../styles/HomeRoute.scss';


const HomeRoute = ({ photos, topics, openModal, updateToFavPhotoIds }) => {
  const { favorites } = usePhotoContext();
console.log("favorites in home", favorites)

  return (
    <div className="home-route">
      <TopNavigation topics={topics} />
      <PhotoList photos={photos} setFavorite={updateToFavPhotoIds} favorites={favorites} onPhotoClick={openModal} />
    </div>
  );
};

export default HomeRoute;