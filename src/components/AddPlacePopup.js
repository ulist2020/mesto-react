import React, { useEffect, useState } from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';


function AddPlacePopup(props) {
    const [name, setName] = useState('');
    const [link, setLink] = useState('');

    const currentUser = React.useContext(CurrentUserContext);

    useEffect(() => {
    setName(currentUser.name);
    setLink(currentUser.about);
    }, [currentUser]);

    function handleChangeName(e) {
        setName(e.target.value);
    }
    function handleChangeLink(e) {
        setLink(e.target.value);
    }
    function handleSubmit(e) {
        // Запрещаем браузеру переходить по адресу формы
        e.preventDefault();
        // Передаём значения управляемых компонентов во внешний обработчик
        props.onUpdateCards({
        name,
        link,
        });
    }
    
    
    return (
        <PopupWithForm 
        name="popup-addimage" 
        title="Новое место"
        isOpen={props.isOpen}
        onClose={props.onClose}
        onSubmit={handleSubmit}
      >
          <input 
          onChange={handleChangeName}
          id="popup__name" 
          className="popup__input" 
          type="text" 
          placeholder="Название" 
          name="name" 
          minLength={2} 
          maxLength={30} 
          required 
          />
          <span className="popup__name-error popup__error" />
          <input
          onChange={handleChangeLink} 
          id="popup__link" 
          className="popup__input" 
          type="url" 
          placeholder="Ссылка" 
          name="link" 
          required 
          />
          <span className="popup__link-error popup__error" />
      </PopupWithForm>

    );
  }
  
  export default AddPlacePopup;
