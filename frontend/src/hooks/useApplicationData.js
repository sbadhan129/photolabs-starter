// hooks/useApplicationData.js
import { useReducer, useEffect } from 'react';

// 1. Define the initial state
const initialState = {
  isModalOpen: false,
  selectedPhoto: null,
  favorites: [],
  photoData: [],
  topicData: [],
  selectedTopicId: null,
};

const ACTIONS = {
  SET_MODAL_OPEN: 'SET_MODAL_OPEN',
  SET_SELECTED_PHOTO: 'SET_SELECTED_PHOTO',
  UPDATE_FAVORITES: 'UPDATE_FAVORITES',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SET_SELECTED_TOPIC_ID: 'SET_SELECTED_TOPIC_ID',
};


// 2. Define the reducer function
const applicationDataReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_MODAL_OPEN:
      return { ...state, isModalOpen: action.isOpen };

    case ACTIONS.SET_SELECTED_PHOTO:
      return { ...state, selectedPhoto: action.photo };

    case ACTIONS.UPDATE_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.includes(action.photoId) 
          ? state.favorites.filter(id => id !== action.photoId) 
          : [...state.favorites, action.photoId]
      };

    case ACTIONS.SET_PHOTO_DATA:
      return { ...state, photoData: action.payload };

      
    case ACTIONS.SET_TOPIC_DATA:
      return { ...state, topicData: action.payload };

      case ACTIONS.SET_SELECTED_TOPIC_ID:
  return { ...state, selectedTopicId: action.topicId };

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

  const setSelectedTopicId = (topicId) => {
    dispatch({ type: ACTIONS.SET_SELECTED_TOPIC_ID, topicId });
  };

  useEffect(() => {
  // Define our fetch functions
  const fetchPhotos = fetch("/api/photos").then(response => {
    if (!response.ok) {
      throw new Error("Failed to fetch photos.");
    }
    return response.json();
  });

  const fetchTopics = fetch("/api/topics").then(response => {
    if (!response.ok) {
      throw new Error("Failed to fetch topics.");
    }
    return response.json();
  });

  // Use Promise.all to execute both promises
  Promise.all([fetchPhotos, fetchTopics])
    .then(([photoData, topicData]) => {
    

      dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: photoData });
      dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: topicData });
    })
    .catch(error => {
      console.error("There was a problem fetching data:", error);
    });
}, []);
 
useEffect(() => {
  if (state.selectedTopicId) {
    fetchPhotosByTopic(state.selectedTopicId);
  }
}, [state.selectedTopicId]);

const fetchPhotosByTopic = (topicId) => {
  fetch(`/api/topics/photos/${topicId}`)
    .then(response => {
      if (!response.ok) {
        throw new Error("Failed to fetch photos by topic.");
      }
      return response.json();
    })
    .then(photoData => {
      dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: photoData });
    })
    .catch(error => {
      console.error("There was a problem fetching photos by topic:", error);
    });
};

  return {
    state,
    setModalOpen,
    setSelectedPhoto,
    updateToFavPhotoIds,
    onClosePhotoDetailsModal,
    setSelectedTopicId,
    fetchPhotosByTopic,
  };
}

export default useApplicationData;
