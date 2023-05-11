import React from 'react';
import { api } from '../utils/api';
import Card from './Card';
function Main(props) {
    const [userName, setUserName] = React.useState("");
    const [userDescription, setUserDescription] = React.useState("");
    const [userAvatar, setUserAvatar] = React.useState("");
    const [cards, setCards] = React.useState([]);
    React.useEffect(() => {
        api.getUserInfo()
            .then((data) => {
                setUserName(data.name);
                setUserDescription(data.about);
                setUserAvatar(data.avatar);
            })
            .catch((err) => {
                console.log(err);
            });
        api.getInitialCards()
            .then((data) => {
                setCards(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    return (
        <main className="content">
            <section className="profile">
                <div className="profile__container">
                    <img className="profile__avatar" src={userAvatar}
                        alt="фотография" onClick={props.onAvatarClick} />
                    <div className="profile__overlay"></div>
                </div>
                <div className="profile__info">
                    <div className="profile__nowrap">
                        <h1 className="profile__name">{userName}</h1>
                        <button className="profile__edit-button" type="button" onClick={props.onProfileClick}></button>
                    </div>
                    <h2 className="profile__description">{userDescription}</h2>
                </div>
                <button className="profile__add-button" type="button" onClick={props.onNewCardClick}></button>
            </section>
            <ul className="elements">
                {cards.map((card) => {
                    return (
                        <li key={card._id} >
                            <Card card={card} onCardClick={props.onCardClick} />
                        </li>
                    );
                })}
            </ul>
        </main>
    )
}
export default Main;