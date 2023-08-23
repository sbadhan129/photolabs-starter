import React, {useState} from 'react';
import HomeRoute from 'routes/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics'; 
import { PhotoProvider } from './components/PhotoContext';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
 import './App.scss';


 const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const closeModal = () => {
    setModalOpen(false)
  }

  const similarPhotos = photos.filter(p => p.id !== selectedPhoto?.id);

  return(
  <PhotoProvider>
   <div className="App">
        <HomeRoute photos={photos} topics={topics} openModal={(photo) => { setSelectedPhoto(photo); setModalOpen(true); }}  />
        {isModalOpen && <PhotoDetailsModal photo ={selectedPhoto} similarPhotos={similarPhotos} closeModal={closeModal} />}
      </div>
   </PhotoProvider>
 );
 }


export default App;
