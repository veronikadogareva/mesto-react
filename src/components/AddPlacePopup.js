import React from 'react';
import PopupWithForm from './PopupWithForm';
import { AppContext } from '../contexts/AppContext';
function AddPlacePopup({ isOpen, onAddPlace }) {
    const { isLoading, closeAllPopups } = React.useContext(AppContext);
    const [place, setPlace] = React.useState('');
    const [link, setLink] = React.useState('');
    React.useEffect(() => {
        setPlace('');
        setLink('');
    }, [isOpen]);

    function handleChangePlace(evt) {
        setPlace(evt.target.value);
    }
    function handleChangeLink(evt) {
        setLink(evt.target.value);
    }
    function handleSubmit(evt) {
        evt.preventDefault();
        onAddPlace({
            title: place,
            link: link
        });
    }
    return (
        <PopupWithForm name='new-place' isOpen={isOpen} onClose={closeAllPopups} title='Новое место' textButton={isLoading ? 'Создание...' : 'Создать'} onSubmit={handleSubmit}>
            <input className="popup__input popup__input_info_title" id="place-input" name="title"
                placeholder="Название" required minLength="2" maxLength="30" value={place} onChange={handleChangePlace} />
            <span className="popup__input-error place-input-error"></span>
            <input className="popup__input popup__input_info_link" id="link-input" type="url" name="link"
                placeholder="Ссылка на картинку" required value={link} onChange={handleChangeLink} />
            <span className="popup__input-error link-input-error"></span>
        </PopupWithForm>
    )
}
export default AddPlacePopup;