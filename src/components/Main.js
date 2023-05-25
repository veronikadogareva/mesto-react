import React from 'react';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
function Main(props) {
    const currentUser = React.useContext(CurrentUserContext);
    return (
        <main className="content">
            <section className="profile">
                <div className="profile__container">
                    <img className="profile__avatar" src={currentUser.avatar}
                        alt="фотография" onClick={props.onAvatarClick} />
                    <div className="profile__overlay"></div>
                </div>
                <div className="profile__info">
                    <div className="profile__nowrap">
                        <h1 className="profile__name">{currentUser.name}</h1>
                        <button className="profile__edit-button" type="button" onClick={props.onProfileClick}></button>
                    </div>
                    <h2 className="profile__description">{currentUser.about}</h2>
                </div>
                <button className="profile__add-button" type="button" onClick={props.onNewCardClick}></button>
            </section>
            <ul className="elements">
                {props.cards.map((card) => {
                    return (
                        <li key={card._id} >
                            <Card card={card} onCardClick={props.onCardClick} onCardLike={props.onCardLike} onCardDelete={props.onCardDelete} />
                        </li>
                    );
                })}
            </ul>
        </main>
    )
}
export default Main;