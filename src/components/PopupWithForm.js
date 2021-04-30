import React from 'react';

function PopupWithForm(props) {
  return (
    <div className={props.isOpen ? 'popup popup_opened' : 'popup'} id={props.name}> 
      <form className="popup__container" method="POST" name={props.name} noValidate>
        <button className="popup__close-button" type="reset" aria-label="Закрыть окно редактирования" />
        <h3 className="popup__header">{props.title}</h3>
        {props.children}
        <button className="popup__button" type="submit" aria-label={props.button}>{props.button}</button>
      </form>
    </div>

  );
}

export default PopupWithForm;