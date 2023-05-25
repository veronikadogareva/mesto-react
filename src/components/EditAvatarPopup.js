import React from 'react';
import PopupWithForm from './PopupWithForm';
function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
    const avatar = React.useRef('');
    function handleSubmit(evt) {
        evt.preventDefault();
        onUpdateAvatar(avatar.current.value);
        avatar.current.value = '';
    }
    return (
        <PopupWithForm name='avatar' title='Обновить аватар' isOpen={isOpen} onClose={onClose} textButton="Сохранить" onSubmit={handleSubmit}>
            <input className="popup__input popup__input_info_avatar" id="avatar-input" type="url" name="avatar"
                placeholder="Ссылка на фотографию" ref={avatar} required />
            <span className="popup__input-error avatar-input-error"></span>
        </PopupWithForm>
    )
}
export default EditAvatarPopup;