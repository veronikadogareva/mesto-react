import React from 'react';

function ImagePopup(props) {
    return (
        <section className={`popup popup_type_image ${props.card ? 'popup_opened' : ''}`}>
            <figure className="popup__container popup__container_type_image">
                <button className="popup__close" type="button" onClick={props.onClose}></button>
                <img className="popup__image" alt="изображение места с карточки" src={props.card.link} />
                <figcaption className="popup__figurcaption">{props.card.name}</figcaption>
            </figure>
        </section>
    )
}
export default ImagePopup;