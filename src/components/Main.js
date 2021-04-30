import React from 'react';

function Main(props) {

      
  return (
    <main className="content">
    <section className="profile">
      <div className="profile__flex">
        <div className="profile__container-avatar">
          <img className="profile__avatar" src="#" alt="Аватарка" />
          <button onClick={props.onEditAvatar} className="profile__avatar-update" type="button" aria-label="Редактировать аватар" />
        </div>
        <div className="profile__info">
          <div className="profile__edit">
            <h1 className="profile__edit-author" />
            <button onClick={props.onEditProfile} className="profile__edit-button" type="button" aria-label="Редактирование профиля" />
          </div>
          <h2 className="profile__profession" />
        </div>
      </div>    
      <button onClick={props.onAddPlace} className="profile__button" type="button" aria-label="Добавить фотографии" />
    </section>
    <section className="photo">
      <ul className="photo__grid">
      </ul>
    </section>
  </main>
  );
}

export default Main;