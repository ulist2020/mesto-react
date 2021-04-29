import '../index.css';

function App() {
  return (
    <div className="page">
    <div className="page__container">
    <header className="header">
      <div className="header__logo" />
    </header>
    <main className="content">
      <section className="profile">
        <div className="profile__flex">
          <div className="profile__container-avatar">
            <img className="profile__avatar" src="#" alt="Аватарка" />
            <button className="profile__avatar-update" type="button" aria-label="Редактировать аватар" />
          </div>
          <div className="profile__info">
            <div className="profile__edit">
              <h1 className="profile__edit-author" />
              <button className="profile__edit-button" type="button" aria-label="Редактирование профиля" />
            </div>
            <h2 className="profile__profession" />
          </div>
        </div>    
        <button className="profile__button" type="button" aria-label="Добавить фотографии" />
      </section>
      <section className="photo">
        <ul className="photo__grid">
        </ul>
      </section>
    </main>
    <footer className="footer">
      <p className="footer__mesto">© 2021 Mesto Russia</p>
    </footer>
    <template id="photo-template" />
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
    <div className="popup" id="popup-image">
      <div className="popup__block">
        <button className="popup__close-button" type="reset" aria-label="Закрыть фотографию" />
        <img className="popup__image" src="#" alt="#" />
        <p className="popup__description" />
      </div>
    </div>
    <div className="popup" id="popup-confirm">
      <form className="popup__confirm-container" method="POST" name="PopupConfirm">
        <button className="popup__close-button" type="reset" aria-label="Закрыть окно" />
        <h3 className="popup__header">Вы уверены?</h3>
        <button className="popup__button" type="submit" aria-label="Да">Да</button>
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
    </div>*/