import React from 'react';
import PopupWithForm from './PopupWithForm';
import { AppContext } from '../contexts/AppContext';
function EditAvatarPopup({ isOpen, onUpdateAvatar }) {
    const { isLoading, closeAllPopups } = React.useContext(AppContext);
    const avatar = React.useRef('');
    React.useEffect(() => {
        avatar.current.value = '';
    }, [isOpen]);
    function handleSubmit(evt) {
        evt.preventDefault();
        onUpdateAvatar(avatar.current.value);

    }
    return (
        <PopupWithForm name='avatar' title='Обновить аватар' isOpen={isOpen} onClose={closeAllPopups} textButton={isLoading ? 'Сохранение...' : 'Сохранить'} onSubmit={handleSubmit}>
            <input className="popup__input popup__input_info_avatar" id="avatar-input" type="url" name="avatar"
                placeholder="Ссылка на фотографию" ref={avatar} required />
            <span className="popup__input-error avatar-input-error"></span>
        </PopupWithForm>
    )
}
export default EditAvatarPopup;