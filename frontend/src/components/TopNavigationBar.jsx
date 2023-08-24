import React, { useEffect } from 'react';
import { usePhotoContext } from './PhotoContext';
import TopicList from './TopicList';
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss'

const TopNavigation = () => {
  const { favorites } = usePhotoContext();
 
  useEffect(() => {
    console.log('Favorites in Top Navigation:', favorites);
  }, [favorites])

  const displayAlert = favorites.length > 0;

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList />
      <FavBadge isFavPhotoExist={displayAlert} />
    </div>
  )
}

export default TopNavigation;