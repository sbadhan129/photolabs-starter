// hooks/useApplicationData.js
import { useReducer } from 'react';

// 1. Define the initial state
const initialState = {
  isModalOpen: false,
  selectedPhoto: null,
  favorites: [],
};

// 2. Define the reducer function
const applicationDataReducer = (state, action) => {
  switch (action.type) {
    case 'SET_MODAL_OPEN':
      return { ...state, isModalOpen: action.isOpen };

    case 'SET_SELECTED_PHOTO':
      return { ...state, selectedPhoto: action.photo };

    case 'UPDATE_FAVORITES':
      return {
        ...state,
        favorites: state.favorites.includes(action.photoId) 
          ? state.favorites.filter(id => id !== action.photoId) 
          : [...state.favorites, action.photoId]
      };

    default:
      throw new Error(`Unsupported action type: ${action.type}`);
  }
};

function useApplicationData() {
  // 3. Use useReducer to replace useState
  const [state, dispatch] = useReducer(applicationDataReducer, initialState);

  const setModalOpen = (isOpen) => {
    dispatch({ type: 'SET_MODAL_OPEN', isOpen });
  };

  const setSelectedPhoto = (photo) => {
    dispatch({ type: 'SET_SELECTED_PHOTO', photo });
  };

  const updateToFavPhotoIds = (photoId) => {
    dispatch({ type: 'UPDATE_FAVORITES', photoId });
  };

  const onClosePhotoDetailsModal = () => {
    setModalOpen(false);
  };

  return {
    state,
    setModalOpen,
    setSelectedPhoto,
    updateToFavPhotoIds,
    onClosePhotoDetailsModal,
  };
}

export default useApplicationData;
