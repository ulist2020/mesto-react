import React from 'react';

function ImagePopup() {
  return (
    <div className="popup" id="popup-image">
      <div className="popup__block">
        <button className="popup__close-button" type="reset" aria-label="Закрыть фотографию" />
        <img className="popup__image" src="#" alt="#" />
        <p className="popup__description" />
      </div>
    </div>
  );
}

export default ImagePopup;