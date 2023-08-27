import React from 'react';
import HomeRoute from 'routes/HomeRoute';
import { PhotoProvider } from './components/PhotoContext';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData';

const App = () => {
  // Destructure the needed functions and state variables from the useApplicationData custom hook
  const { 
    state, 
    setModalOpen, 
    setSelectedPhoto, 
    updateToFavPhotoIds, 
    onClosePhotoDetailsModal, 
    fetchPhotosByTopic, 
  } = useApplicationData();

  // Filter out the currently selected photo to get a list of similar photos
  const similarPhotos = state.photoData.filter(p => p.id !== state.selectedPhoto?.id);

  return (
     // Wrap the application within the PhotoProvider to make photo-related data and functions accessible to child components
    <PhotoProvider>
      <div className="App">

        {/* Render the HomeRoute component and pass down necessary data and handlers as props */}
        <HomeRoute 
          photos={state.photoData} 
          topics={state.topicData} 

           // Define the function to open the modal and set the selected photo
          openModal={(photo) => { setSelectedPhoto(photo); setModalOpen(true); }}
         updateToFavPhotoIds={updateToFavPhotoIds} 
         fetchPhotosByTopic = {fetchPhotosByTopic}
        />

         {/* Conditionally render the PhotoDetailsModal based on whether the modal should be open */}
        {state.isModalOpen && (
          <PhotoDetailsModal 
            photo={state.selectedPhoto} 
            similarPhotos={similarPhotos} 
            closeModal={onClosePhotoDetailsModal}
          />
        )}
      </div>
    </PhotoProvider>
  );
};

export default App;
