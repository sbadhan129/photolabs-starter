// Importing necessary libraries, hooks, and components
import React, { useEffect } from 'react';
import { usePhotoContext } from './PhotoContext';
import TopicList from './TopicList';
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss'

// Functional component for the top navigation bar.
const TopNavigation = ({topics,fetchPhotosByTopic}) => {
  const { favorites, darkMode, setDarkMode } = usePhotoContext();
 

  // useEffect hook to perform side effects.
  // In this case, it logs the number of favorites every time they change.
  
  useEffect(() => {
    // Use effect to add/remove a class on the document body for dark mode
    if (darkMode) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
}, [darkMode]);
  
  
  useEffect(() => {
  }, [favorites])  // Dependency array to rerun the effect when 'favorites' change.

  // Determines if there are any favorite photos. 
  //This will be used to decide whether to display an alert.
  const displayAlert = favorites.length > 0;

  return (
    <div className="top-nav-bar">
      {/* Brand/logo for the application. */}
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} fetchPhotosByTopic = {fetchPhotosByTopic} />
      <FavBadge isFavPhotoExist={displayAlert} />
      <div>
        <button className="button-toggle-mode" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
    </div>
    </div>
  )
}

export default TopNavigation;