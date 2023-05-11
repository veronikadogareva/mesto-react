import React from 'react';

function Card(props) {
    function handleClick() {
        props.onCardClick(props.card);
    }
    return (
        <li className="element">
            <img className="element__image" src={props.card.link} onClick={handleClick} alt={props.card.name}/>
            <div className="element__group">
                <h2 className="element__place">{props.card.name}</h2>
                <div className="element__like">
                    <button className="element__icon" type="button"></button>
                    <p className="element__counter">{props.card.likes.length}</p>
                </div>
            </div>
            <button className="element__trash" type="button"></button>
        </li>
    )
}
export default Card;