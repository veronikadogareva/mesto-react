import React from 'react';

function PopupWithForm({ name, isOpen, onClose, title, textButton, onSubmit, children }) {
    return (
        <section className={`popup popup_type_${name} ${isOpen && 'popup_opened'}`}>
            <div className="popup__container">
                <button className="popup__close" type="button" onClick={onClose} />
                <h2 className="popup__title">{title} </h2>
                <form className="popup__form" name={`form-${name}`} onSubmit={onSubmit}>
                    {children}
                    <button className="popup__button" type="submit">{textButton}</button>
                </form>
            </div>
        </section>
    )
}
export default PopupWithForm;