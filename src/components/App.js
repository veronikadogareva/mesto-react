import React from 'react';
import logo from '../images/logo.svg';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(false);
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }
  function handleCardClick(card) {
    setSelectedCard(card);
  }
  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(false);
  }
  return (
    <div className="page">
      <Header src={logo} alt='Логотип сайта Место' />
      <Main onAvatarClick={handleEditAvatarClick} onProfileClick={handleEditProfileClick} onNewCardClick={handleAddPlaceClick} onCardClick={handleCardClick} />
      <Footer />
      <PopupWithForm name='profile' title="Редактировать профиль" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
        <input className="popup__input popup__input_info_name" id="name-input" name="name" placeholder="Имя"
          required minLength="2" maxLength="40" />
        <span className="popup__input-error name-input-error"></span>
        <input className="popup__input popup__input_info_description" id="description-input" name="description"
          placeholder="О себе" required minLength="2" maxLength="200" />
        <span className="popup__input-error description-input-error"></span>
        <button className="popup__button" type="submit">Сохранить</button>
      </PopupWithForm>
      <PopupWithForm name='new-place' title='Новое место' isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
        <input className="popup__input popup__input_info_title" id="place-input" name="title"
          placeholder="Название" required minLength="2" maxLength="30" />
        <span className="popup__input-error place-input-error"></span>
        <input className="popup__input popup__input_info_link" id="link-input" type="url" name="link"
          placeholder="Ссылка на картинку" required />
        <span className="popup__input-error link-input-error"></span>
        <button className="popup__button" type="submit">Создать</button>
      </PopupWithForm>
      <PopupWithForm name='avatar' title='Обновить аватар' isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
        <input className="popup__input popup__input_info_avatar" id="avatar-input" type="url" name="avatar"
          placeholder="Ссылка на фотографию" required />
        <span className="popup__input-error avatar-input-error"></span>
        <button className="popup__button" type="submit">Сохранить</button>
      </PopupWithForm>
      <PopupWithForm name='delete' title='Вы уверены?' onClose={closeAllPopups}>
        <button className="popup__button popup__button_type_yes" type="button">Да</button>
      </PopupWithForm>
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </div>
  );
}

export default App;
