import React from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';


function App() {
  
  const [isEditAvatarPopupOpen, setisEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setisAddPlacePopupOpen] = React.useState(false);

  function handleEditAvatarClick() {
    setisEditAvatarPopupOpen(true);
  }
  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setisAddPlacePopupOpen(true);
   }
   
  function closeAllPopups() {
    setisEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setisAddPlacePopupOpen(false);
   }

  return (
    <div className="page">
      <div className="page__container">

        <Header />
        <Main  onEditAvatar={()=> handleEditAvatarClick()} onEditProfile={()=> handleEditProfileClick()} onAddPlace={()=> handleAddPlaceClick()} />
        <Footer />

        <template id="photo-template" />

        <PopupWithForm 
          name="popup-author" 
          title="Редактировать профиль"
          button="Сохранить" 
          isOpen={isEditProfilePopupOpen}
          onClose={()=> closeAllPopups()}
        >
            <input id="popup__name-author" className="popup__input" type="text" placeholder="Имя" name="author" minLength={2} maxLength={40} required />
            <span className="popup__name-author-error popup__error" />
            <input id="popup__link-author" className="popup__input" type="text" placeholder="О себе" name="profession" minLength={2} maxLength={200} required />
            <span className="popup__link-author-error popup__error" />
        </PopupWithForm>

        <PopupWithForm 
          name="popup-addimage" 
          title="Новое место"
          button="Создать"
          isOpen={isAddPlacePopupOpen}
          onClose={()=> closeAllPopups()} 
        >
            <input id="popup__name" className="popup__input" type="text" placeholder="Название" name="name" minLength={2} maxLength={30} required />
            <span className="popup__name-error popup__error" />
            <input id="popup__link" className="popup__input" type="url" placeholder="Ссылка" name="link" required />
            <span className="popup__link-error popup__error" />
        </PopupWithForm>

        <PopupWithForm 
          name="popup-update-avatar" 
          title="Обновить аватар" 
          button="Сохранить"
          isOpen={isEditAvatarPopupOpen}
          onClose={()=> closeAllPopups()}
        >
            <input id="popup__link-avatar" className="popup__input" type="url" placeholder="Ссылка" name="avatar" required />
            <span className="popup__link-avatar-error popup__error" />
        </PopupWithForm>

        <PopupWithForm 
          name="popup-confirm" 
          title="Вы уверены?"
          button="Да"
        >
        </PopupWithForm>

        <ImagePopup />

      </div>
    </div>
    
  );
}

export default App;

/*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    
    <div className="popup" id="popup-author"> 
      <form className="popup__container" method="POST" name="PopupAuthorForm" noValidate>
        <button className="popup__close-button" type="reset" aria-label="Закрыть окно редактирования" />
        <h3 className="popup__header">Редактировать профиль</h3>
        <input id="popup__name-author" className="popup__input" type="text" placeholder="Имя" name="author" minLength={2} maxLength={40} required />
        <span className="popup__name-author-error popup__error" />
        <input id="popup__link-author" className="popup__input" type="text" placeholder="О себе" name="profession" minLength={2} maxLength={200} required />
        <span className="popup__link-author-error popup__error" />
        <button className="popup__button" type="submit" aria-label="Сохранить">Сохранить</button>
      </form>
    </div>
    <div className="popup" id="popup-addimage"> 
      <form className="popup__container" method="POST" name="PopupAddimageForm" noValidate>
        <button className="popup__close-button" type="reset" aria-label="Закрыть окно" />
        <h3 className="popup__header">Новое место</h3>
        <input id="popup__name" className="popup__input" type="text" placeholder="Название" name="name" minLength={2} maxLength={30} required />
        <span className="popup__name-error popup__error" />
        <input id="popup__link" className="popup__input" type="url" placeholder="Ссылка" name="link" required />
        <span className="popup__link-error popup__error" />
        <button className="popup__button" type="submit" aria-label="Сохранить">Создать</button>
      </form>
    </div>
    <div className="popup" id="popup-update-avatar"> 
      <form className="popup__container popup__update-container" method="POST" name="PopupUpdateAvatar" noValidate>
        <button className="popup__close-button" type="reset" aria-label="Закрыть окно" />
        <h3 className="popup__header">Обновить аватар</h3>
        <input id="popup__link-avatar" className="popup__input" type="url" placeholder="Ссылка" name="avatar" required />
        <span className="popup__link-avatar-error popup__error" />
        <button className="popup__button" type="submit" aria-label="Сохранить">Сохранить</button>
      </form>
    </div>
    <div className="popup" id="popup-confirm">
      <form className="popup__confirm-container" method="POST" name="PopupConfirm">
        <button className="popup__close-button" type="reset" aria-label="Закрыть окно" />
        <h3 className="popup__header">Вы уверены?</h3>
        <button className="popup__button" type="submit" aria-label="Да">Да</button>
      </form>   
    </div>
    <div className="popup" id="popup-image">
      <div className="popup__block">
        <button className="popup__close-button" type="reset" aria-label="Закрыть фотографию" />
        <img className="popup__image" src="#" alt="#" />
        <p className="popup__description" />
      </div>
    </div>

    
    */