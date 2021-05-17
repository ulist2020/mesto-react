import React, { useEffect, useState } from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import api from '../utils/Api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import EditProfilePopup from './EditProfilePopup';

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
    })
    .catch((err) => console.log(`Ошибка: ${err}`));
  },[])

  useEffect(() => {
    api.getInitialCards()
    .then((results) => {
      setCards(results)
    })
    .catch((err) => console.log(`Ошибка: ${err}`));
  },[])
      
  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, !isLiked)
    .then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    })
    .catch((err) => console.log(`Ошибка: ${err}`));  
}

function handleCardDelete (card){
  api.deleteCard(card._id)
      .then(() => {
        const newCards = cards.filter((c) => c._id !== card._id);
        setCards(newCards);
      })
      .catch((err) => console.log(`Ошибка: ${err}`));
}

function handleUpdateUser(currentUser) {
  api.editUser(currentUser)
    .then((results) =>{
      setCurrentUser(results);
      closeAllPopups()
    })
    .catch((err) => console.log(`Ошибка: ${err}`));

}
  return (
    <CurrentUserContext.Provider value={currentUser}>
        <div className="page">
          <div className="page__container">

            <Header />
            
            <Main 
              onEditAvatar={handleEditAvatarClick} 
              onEditProfile={handleEditProfileClick} 
              onAddPlace={handleAddPlaceClick}
              cards={cards}
              onCardClick={handleCardClick}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}
            >
            </Main>
                    
            <Footer />

            <EditProfilePopup 
              isOpen={isEditProfilePopupOpen} 
              onClose={closeAllPopups}
              onUpdateUser={handleUpdateUser}
              />

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

