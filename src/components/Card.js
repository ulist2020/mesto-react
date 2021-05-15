import React from 'react';
import { CurrentCardsContext } from '../contexts/CurrentCardsContext'

function Card(props) {
  const cardsContext = React.useContext(CurrentCardsContext);
  //console.log(cardsContext.owner._id)

  
  //console.log(cardsContext)
     function handleClick() {
        props.onCardClick(props.name,props.link);
      } 
  return (
    <li  onClick={handleClick} className="photo__card">
    <div className="photo__card-place" style={{ backgroundImage: `url(${cardsContext.link})` }}/>
    <button className={cardsContext.cardDeleteButtonClassName} type="button" aria-label="Удалить фото" />
    <div className="photo__flex">
      <h2 className="photo__card-discprition">{cardsContext.name}</h2>
      <div className="photo__like-container">
        <button className="photo__card-like" type="button" aria-label="Поставить лайк" />
        <p className="photo__like-counter" >{cardsContext.likes.length}</p>
      </div>
    </div>
  </li>
);
}

export default Card;