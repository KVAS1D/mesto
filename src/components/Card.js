export default class Card {
  constructor(data, selector, handleCardClick, popupSure, user, api) {
     this._id = data.id;
     this._owner = data.owner;
     this._name = data.name;
     this._link = data.link;
     this._likes = data.likes.length;
     this._isLiked = false;
     this._user = user;
     this._popupSure = popupSure;
     this._api = api;
     data.likes.forEach(like => {
        if (like._id == this._user.id) {
           this._isLiked = true;
        }
     });
     this._selector = selector;
     this._handleCardClick = handleCardClick;
     this._selectorIsLiked = 'element__like_active';
  };
  
  _getTemplate() {
     const userCard = document
        .querySelector(this._selector)
        .content
        .querySelector('.element')
        .cloneNode(true);
     return userCard;
  }

  _togglelike() {
     if (this._likeButton.classList.contains(this._selectorIsLiked)) {
        this._api.deleteLike(this._id)
           .then((result) => {
              this._card.querySelector('.element__like-counter').textContent = result.likes.length;
              this._likeButton.classList.remove(this._selectorIsLiked);
           })
           .catch(this._api.catchError); 
     } else {
        this._api.putLike(this._id)
           .then((result) => {
              this._card.querySelector('.element__like-counter').textContent = result.likes.length;
              this._likeButton.classList.add(this._selectorIsLiked);
           })
           .catch(this._api.catchError); 
     }
  }

  _deleteCard() {
     this._popupSure.open(this._card, this._id);
  }

  _setEventListeners() {
     this._picture.addEventListener('click', () => this._handleCardClick(this._name, this._link));
     this._likeButton.addEventListener('click', () => this._togglelike());
     this._card.querySelector('.element__del').addEventListener('click', () => this._deleteCard());
  }  

  createCard() {
     this._card = this._getTemplate();
     this._picture = this._card.querySelector('.element__image');
     this._picture.src = this._link;
     this._picture.alt = this._name;
     this._card.querySelector('.element__title').textContent = this._name;
     this._card.querySelector('.element__like-counter').textContent = this._likes;
     this._likeButton = this._card.querySelector('.element__like');
     if (this._isLiked) {
        this._likeButton.classList.add(this._selectorIsLiked);
     }
     if (this._owner == this._user.id) {
        this._card.querySelector('.element__del').classList.add('element__delete-button_active');
     }
     this._setEventListeners();
     return this._card;
  }
};