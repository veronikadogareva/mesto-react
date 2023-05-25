import React, { useState } from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = useState(currentUser.name);
  const [description, setDescription] = useState(currentUser.about);
  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);
  function handleChangeName(evt) {
    setName(evt.target.value);
  }
  function handleChangeDescription(evt) {
    setDescription(evt.target.value);
  }
  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateUser({
      name: name,
      about: description
    });
  }
  return (
    <PopupWithForm name='profile' title="Редактировать профиль" isOpen={isOpen} onClose={onClose} textButton="Сохранить" onSubmit={handleSubmit}>
      <input className="popup__input popup__input_info_name" id="name-input" name="name" placeholder="Имя"
        required minLength="2" maxLength="40" value={name} onChange={handleChangeName} />
      <span className="popup__input-error name-input-error"></span>
      <input className="popup__input popup__input_info_description" id="description-input" name="description"
        placeholder="О себе" required minLength="2" maxLength="200" value={description} onChange={handleChangeDescription} />
      <span className="popup__input-error description-input-error"></span>
    </PopupWithForm>
  )
}
export default EditProfilePopup;