import React from 'react';
import '../styles/PhotoDetailsModal.scss';
import PhotoList from '../components/PhotoList';
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({ closeModal, photo, similarPhotos }) => {
  console.log(photo)
  
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={closeModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      
      {/* Displaying the larger version of the selected photo */}
      <img src={photo.urls.full} alt={`Large view of photo taken in ${photo.location.city}, ${photo.location.country}`} className="photo-details-modal__image" />

      {/* Adding a heading for similar photos */}
      <h2 className="photo-details-modal__similar-heading">Similar Photos</h2>

      {/* Displaying similar photos */}
      <PhotoList photos={similarPhotos}  />

    </div>
  )
};

export default PhotoDetailsModal;
