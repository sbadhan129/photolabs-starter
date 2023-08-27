import React from 'react';
// Import necessary components and hooks
import TopNavigation from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import { usePhotoContext } from '../components/PhotoContext';  // Assuming you've set up this context
import '../styles/HomeRoute.scss';

// Define the HomeRoute component
const HomeRoute = ({ photos, topics, openModal, updateToFavPhotoIds, fetchPhotosByTopic }) => {
  const { favorites } = usePhotoContext();
console.log("favorites in home", favorites)

  return (
    <div className="home-route">

      {/* Render the TopNavigation component and pass down topics as props */}
      <TopNavigation topics={topics} fetchPhotosByTopic = {fetchPhotosByTopic}  />
      <PhotoList photos={photos} setFavorite={updateToFavPhotoIds} favorites={favorites} onPhotoClick={openModal} />
    </div>
  );
};

export default HomeRoute;