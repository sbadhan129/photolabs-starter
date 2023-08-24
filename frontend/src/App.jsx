import React from 'react';
import HomeRoute from 'routes/HomeRoute';
import photos from './mocks/photos';
import topics from './mocks/topics';
import { PhotoProvider } from './components/PhotoContext';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData';

const App = () => {
  const { 
    state, 
    setModalOpen, 
    setSelectedPhoto, 
    updateToFavPhotoIds, 
    onClosePhotoDetailsModal 
  } = useApplicationData();

  const similarPhotos = photos.filter(p => p.id !== state.selectedPhoto?.id);

  return (
    <PhotoProvider>
      <div className="App">
        <HomeRoute 
          photos={photos} 
          topics={topics} 
          openModal={(photo) => { setSelectedPhoto(photo); setModalOpen(true); }}
         updateToFavPhotoIds={updateToFavPhotoIds}
        />
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
