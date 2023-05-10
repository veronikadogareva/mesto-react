class Api {
  constructor(dataApi) {
    this._authorization = dataApi.authorization;
  }
  _checkResult(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }
  getInitialCards() {
    return fetch('https://mesto.nomoreparties.co/v1/cohort-64/cards', {
      headers: {
        authorization: this._authorization
      }
    })
      .then(this._checkResult);
  }

  getUserInfo() {
    return fetch('https://nomoreparties.co/v1/cohort-64/users/me', {
      headers: {
        authorization: this._authorization
      }
    })
      .then(this._checkResult);
  }
  patchUserInfo(data) {
    return fetch('https://nomoreparties.co/v1/cohort-64/users/me', {
      method: 'PATCH',
      headers: {
        authorization: this._authorization,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: data.name,
        about: data.description
      })
    })
      .then(this._checkResult);
  }
  patchUserAvatar(avatar) {
    return fetch('https://mesto.nomoreparties.co/v1/cohort-64/users/me/avatar', {
      method: 'PATCH',
      headers: {
        authorization: this._authorization,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        avatar: avatar,
      })
    })
      .then(this._checkResult);
  }
  postNewCard(data) {
    return fetch('https://nomoreparties.co/v1/cohort-64/cards', {
      method: 'POST',
      headers: {
        authorization: this._authorization,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: data.title,
        link: data.link
      })
    })
      .then(this._checkResult);
  }
  deleteCard(cardId) {
    return fetch(`https://mesto.nomoreparties.co/v1/cohort-64/cards/${cardId}`, {
      method: 'DELETE',
      headers: {
        authorization: this._authorization
      }
    })
      .then(this._checkResult);
  }
  likeCard(cardId) {
    return fetch(`https://mesto.nomoreparties.co/v1/cohort-64/cards/${cardId}/likes`, {
      method: 'PUT',
      headers: {
        authorization: this._authorization
      }
    })
      .then(this._checkResult);
  }
  dislikeCard(cardId) {
    return fetch(`https://mesto.nomoreparties.co/v1/cohort-64/cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: {
        authorization: this._authorization
      }
    })
      .then(this._checkResult);
  }
}
const api = new Api({ authorization: 'c4201b26-884e-4a14-8fc9-a54d84569f1b' });
export { api };