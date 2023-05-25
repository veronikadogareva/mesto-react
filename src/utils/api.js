class Api {
  constructor(dataApi) {
    this._authorization = dataApi.headers.authorization;
    this._baseUrl = dataApi.baseUrl;
    this._headers = dataApi.headers;
  }
  
  _checkResult(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }
  _request(url, options) {
    return fetch(`${this._baseUrl}${url}`, options).then(this._checkResult)
  }
  getInitialCards() {
    return this._request('cards', {
      headers: this._headers
    });
  }

  getUserInfo() {
    return this._request('users/me', {
      headers: this._headers
    });
  }
  patchUserInfo(data) {
    return this._request('users/me', {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.about
      })
    });
  }
  patchUserAvatar(avatar) {
    return this._request('users/me/avatar', {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: avatar,
      })
    });
  }
  postNewCard(data) {
    return this._request('cards', {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: data.title,
        link: data.link
      })
    });
  }
  deleteCard(cardId) {
    return this._request(`cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers
    });
  }
  likeCard(cardId) {
    return this._request(`cards/${cardId}/likes`, {
      method: 'PUT',
      headers: this._headers
    });
  }
  dislikeCard(cardId) {
    return this._request(`cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: this._headers
    });
  }
}
const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-64/',
  headers: {
    authorization: 'c4201b26-884e-4a14-8fc9-a54d84569f1b',
    'Content-Type': 'application/json'
  }
}); 

export { api };