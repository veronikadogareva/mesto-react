import React from 'react';

function PopupWithForm(props) {
    return (
        <section className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_opened' : ''}`}>
            <div className="popup__container">
                <button className="popup__close" type="button" onClick={props.onClose}></button>
                <h2 className="popup__title">{props.title} </h2>
                <form className="popup__form" name={`form-${props.name}`} noValidate >
                    {props.children}
                </form>
            </div>
        </section>
    )

}
export default PopupWithForm;