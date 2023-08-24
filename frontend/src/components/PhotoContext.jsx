import React, { createContext, useState, useContext } from 'react';

const PhotoContext = createContext();

export const PhotoProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);
    
    return (
        <PhotoContext.Provider value={{ favorites, setFavorites }}>
            {children}
        </PhotoContext.Provider>
    );
};



export const usePhotoContext = () => {
    return useContext(PhotoContext);
};