import React, { useEffect, useState } from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import api from '../utils/Api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
//import { CurrentCardsContext } from '../contexts/CurrentCardsContext';

function App() {
  
  const [isEditAvatarPopupOpen, setisEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setisAddPlacePopupOpen] = useState(false);

  const [selectedCard, setSelectedCard] = useState({link:'',name:'',isOpen: false});

  //const [user, setUser] = useState({});
  const [cards, setCards] = useState([]);

  const [currentUser, setCurrentUser] = useState({});
 // const [currentCards, setCurrentCards] = useState([]);

  function handleEditAvatarClick() {
    setisEditAvatarPopupOpen(true);
  }
  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setisAddPlacePopupOpen(true);
   }

   function handleCardClick(name,link) {
    setSelectedCard({
      name: name,
      link: link,
      isOpen: true
    });
   }

  function closeAllPopups() {
    setisEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setisAddPlacePopupOpen(false);
    setSelectedCard({link:'',name:'',isOpen: false})
   }

 /*  useEffect(() => {
    api.getUser()
    .then((results) => {
      setCurrentUser(
        {
          _id: results._id,
          name: results.name,
          about: results.about,
          avatar: results.avatar
      });
      return results._id;
    })
    .then((userId)=>{
      api.getInitialCards()
      .then((results) => {
        results.map((card) => {
          const isOwn = card.owner._id === userId;
          const cardDeleteButtonClassName = (
            `photo__delete-icon ${isOwn ? '' : 'photo__delete-icon_hidden'}`
          ); 
          card.cardDeleteButtonClassName = cardDeleteButtonClassName;

          const isLiked = card.likes.some(i => i._id === userId);
          const cardLikeButtonClassName = (
            `photo__card-like ${isLiked ? 'photo__card-like_active' : 'photo__card-like'}`);
          card.cardLikeButtonClassName = cardLikeButtonClassName;
        })
        setCurrentCards(results);
      })
      .catch((err) => {
        console.log(err); 
      })

    })
    .catch((err) => {
      console.log(err); 
    })
  },[])*/

  useEffect(() => {
    api.getUser()
    .then((results) => {
      setCurrentUser(
        {
          _id: results._id,
          name: results.name,
          about: results.about,
          avatar: results.avatar
      })
     // .catch((err) => {
      //  console.log(err); 
      //})
    })
  },[])

  useEffect(() => {
    api.getInitialCards()
    .then((results) => {
      setCards(results)
       // .catch((err) => {
        //  console.log(err); 
       // })
    })
  },[])
      



 /* function handleCardLike(card) {
    
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    console.log(isLiked)
    
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      //console.log(newCard)
      setCurrentCards((cards) => cards.map((c) => c._id === card._id ? newCard : c));
    });
    
  }  */ 

  return (
    <CurrentUserContext.Provider value={currentUser}>
        <div className="page">
          <div className="page__container">

            <Header />
            
            <Main onEditAvatar={handleEditAvatarClick} 
                  onEditProfile={handleEditProfileClick} 
                  onAddPlace={handleAddPlaceClick}
                  cards={cards}
                  onCardClick={handleCardClick}
            >
            </Main>
                    
            <Footer />

            <PopupWithForm 
              name="popup-author" 
              title="Редактировать профиль"
              isOpen={isEditProfilePopupOpen}
              onClose={closeAllPopups}
            >
                <input id="popup__name-author" className="popup__input" type="text" placeholder="Имя" name="author" minLength={2} maxLength={40} required />
                <span className="popup__name-author-error popup__error" />
                <input id="popup__link-author" className="popup__input" type="text" placeholder="О себе" name="profession" minLength={2} maxLength={200} required />
                <span className="popup__link-author-error popup__error" />
            </PopupWithForm>

            <PopupWithForm 
              name="popup-addimage" 
              title="Новое место"
              isOpen={isAddPlacePopupOpen}
              onClose={closeAllPopups} 
            >
                <input id="popup__name" className="popup__input" type="text" placeholder="Название" name="name" minLength={2} maxLength={30} required />
                <span className="popup__name-error popup__error" />
                <input id="popup__link" className="popup__input" type="url" placeholder="Ссылка" name="link" required />
                <span className="popup__link-error popup__error" />
            </PopupWithForm>

            <PopupWithForm 
              name="popup-update-avatar" 
              title="Обновить аватар" 
              isOpen={isEditAvatarPopupOpen}
              onClose={closeAllPopups}
            >
                <input id="popup__link-avatar" className="popup__input" type="url" placeholder="Ссылка" name="avatar" required />
                <span className="popup__link-avatar-error popup__error" />
            </PopupWithForm>

            <PopupWithForm 
              name="popup-confirm" 
              title="Вы уверены?"
            >
            </PopupWithForm>

            <ImagePopup
            card={selectedCard}
            isOpen={selectedCard.isOpen}
            onClose={()=> closeAllPopups()} 
            />

          </div>
        </div>
    </CurrentUserContext.Provider>
  );
}

export default App;

