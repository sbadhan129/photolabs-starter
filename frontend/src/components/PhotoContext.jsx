import React, { createContext, useState, useContext } from 'react';

// Create a new context for photos
const PhotoContext = createContext();

export const PhotoProvider = ({ children }) => {
    // Local state to hold the list of favorite photos
    const [favorites, setFavorites] = useState([]);
    
    return (
        // Provide the favorites and its setter to the children
        <PhotoContext.Provider value={{ favorites, setFavorites }}>
            {children}
        </PhotoContext.Provider>
    );
};



export const usePhotoContext = () => {
    return useContext(PhotoContext);
};