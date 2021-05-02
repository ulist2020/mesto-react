import React, { useEffect, useState } from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import api from '../utils/Api';
import Card from './Card';

function App() {
  
  const [isEditAvatarPopupOpen, setisEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setisAddPlacePopupOpen] = useState(false);

  const [selectedCard, setSelectedCard] = useState({link:'',name:'',isOpen: false});

  const [user, setUser] = useState([]);
  const [cards, setCards] = useState([]);

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
      setUser(
        {
        name:results.name,
        description: results.about,
        avatar: results.avatar
      });
    })
  },[])

  useEffect(() => {
    api.getInitialCards()
    .then((results) => {
      setCards(results);
    })
  },[])

  return (
    <div className="page">
      <div className="page__container">

        <Header />
        
        <Main  onEditAvatar={()=> handleEditAvatarClick()} 
              onEditProfile={()=> handleEditProfileClick()} 
              onAddPlace={()=> handleAddPlaceClick()}
              userAvatar = {user.avatar}
              userName = {user.name}
              userDescription = {user.description}
             >
              {cards.map((card) => <Card
                key={card._id}
                onCardClick = {handleCardClick} 
                link={card.link} 
                name={card.name} 
                likes={card.likes.length}/>)}
        </Main>
                
        <Footer />

        <PopupWithForm 
          name="popup-author" 
          title="Редактировать профиль"
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

        <ImagePopup
        card={selectedCard}
        isOpen={selectedCard.isOpen}
        onClose={()=> closeAllPopups()} 
        />

      </div>
    </div>
    
  );
}

export default App;

