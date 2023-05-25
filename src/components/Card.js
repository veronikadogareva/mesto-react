import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
function Card({card, onCardClick, onCardLike, onCardDelete}) {
    const currentUser = React.useContext(CurrentUserContext);
    const isOwn = card.owner._id === currentUser._id;
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    const cardLikeButtonClassName = ( 
        `element__icon ${isLiked && 'element__icon_active'}` 
      );
    function handleClick() {
        onCardClick(card);
    }
    function handleLikeClick(){
        onCardLike(card);
    }
    function handleDeleteClick(){
        onCardDelete(card);
    }
    return (
        <article className="element">
            <img className="element__image" src={card.link} onClick={handleClick} alt={card.name}/>
            <div className="element__group">
                <h2 className="element__place">{card.name}</h2>
                <div className="element__like">
                    <button className={cardLikeButtonClassName} type="button" onClick={handleLikeClick}/>
                    <p className="element__counter">{card.likes.length}</p>
                </div>
            </div>
            {isOwn && <button className="element__trash" type="button" onClick={handleDeleteClick}/>}
        </article>
    )
}
export default Card;