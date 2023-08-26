// Importing necessary libraries, hooks, and components
import React, { useEffect } from 'react';
import { usePhotoContext } from './PhotoContext';
import TopicList from './TopicList';
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss'

// Functional component for the top navigation bar.
const TopNavigation = () => {
  const { favorites } = usePhotoContext();
 

  // useEffect hook to perform side effects.
  // In this case, it logs the number of favorites every time they change.
  useEffect(() => {
    console.log('Favorites in Top Navigation:', favorites);
  }, [favorites])  // Dependency array to rerun the effect when 'favorites' change.

  // Determines if there are any favorite photos. 
  //This will be used to decide whether to display an alert.
  const displayAlert = favorites.length > 0;

  return (
    <div className="top-nav-bar">
      {/* Brand/logo for the application. */}
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList />
      <FavBadge isFavPhotoExist={displayAlert} />
    </div>
  )
}

export default TopNavigation;