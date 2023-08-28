import React from 'react';
import '../styles/PhotoDetailsModal.scss';
import PhotoList from '../components/PhotoList';
import PhotoFavButton from '../components/PhotoFavButton';
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({ closeModal, photo, similarPhotos }) => {
  console.log(photo)
  const [currentPhoto, setCurrentPhoto] = React.useState(photo);

  const updateModalContent = (newPhoto) => {
    setCurrentPhoto(newPhoto);
  };
  return (
    <div className="photo-details-modal">

      <button className="photo-details-modal__close-button" onClick={closeModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="photo-details-modal__image-container">
      <PhotoFavButton photoId={currentPhoto.id} />
        <img 
          src={currentPhoto.urls.full} 
          alt={`Large view of photo taken in ${currentPhoto.location.city}, ${currentPhoto.location.country}`} 
          className="photo-details-modal__image" 
        />
      
      </div>
      
      {/* Displaying the larger version of the selected photo */}

      

      {/* Adding a heading for similar photos */}
      <h2 className="photo-details-modal__similar-heading">Similar Photos</h2>

      {/* Displaying similar photos */}
      <PhotoList photos={similarPhotos}  
      onPhotoClick={updateModalContent}
      />

    </div>
  )
};

export default PhotoDetailsModal;
