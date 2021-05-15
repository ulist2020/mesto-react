import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext'
//import { CurrentCardsContext } from '../contexts/CurrentCardsContext'

function Main(props) {
  const userContext = React.useContext(CurrentUserContext);
  //const cardsContext = React.useContext(CurrentCardsContext);
  //const isOwn = cardsContext.owner._id === userContext._id;
                             // Определяем, являемся ли мы владельцем текущей карточки
//
//console.log(isOwn)
  
  console.log(userContext) 
  return (
    <main className="content">
    <section className="profile">
      <div className="profile__flex">
        <div className="profile__container-avatar">
          <div className="profile__avatar" style={{ backgroundImage: `url(${userContext.avatar})` }}  alt="Аватарка" />
          <button onClick={props.onEditAvatar} className="profile__avatar-update" type="button" aria-label="Редактировать аватар" />
        </div>
        <div className="profile__info">
          <div className="profile__edit">
            <h1 className="profile__edit-author">{userContext.name}</h1>
            <button onClick={props.onEditProfile} className="profile__edit-button" type="button" aria-label="Редактирование профиля" />
          </div>
          <h2 className="profile__profession">{userContext.about}</h2>
        </div>
      </div>    
      <button onClick={props.onAddPlace} className="profile__button" type="button" aria-label="Добавить фотографии" />
    </section>
    <section className="photo">
      <ul className="photo__grid">
        {props.children}
      </ul>
    </section>

  </main>
  );
}

export default Main;