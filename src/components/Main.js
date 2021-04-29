import React from 'react';

function Main() {

    function handleEditAvatarClick() {
        document.querySelector('#popup-update-avatar').classList.add('popup_opened');
      }
      function handleEditProfileClick() {
        document.querySelector('#popup-author').classList.add('popup_opened');
      }
      function handleAddPlaceClick() {
        document.querySelector('#popup-addimage').classList.add('popup_opened');
      }
      
  return (
    <main className="content">
    <section className="profile">
      <div className="profile__flex">
        <div className="profile__container-avatar">
          <img className="profile__avatar" src="#" alt="Аватарка" />
          <button onClick={handleEditAvatarClick} className="profile__avatar-update" type="button" aria-label="Редактировать аватар" />
        </div>
        <div className="profile__info">
          <div className="profile__edit">
            <h1 className="profile__edit-author" />
            <button onClick={handleEditProfileClick} className="profile__edit-button" type="button" aria-label="Редактирование профиля" />
          </div>
          <h2 className="profile__profession" />
        </div>
      </div>    
      <button onClick={handleAddPlaceClick} className="profile__button" type="button" aria-label="Добавить фотографии" />
    </section>
    <section className="photo">
      <ul className="photo__grid">
      </ul>
    </section>
  </main>
  );
}

export default Main;