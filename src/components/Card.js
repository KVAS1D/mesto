export default class Card {
  constructor(data, selector, handleCardClick, popupSure, user) {
     this._id = data.id;
     this._owner = data.owner;
     this._name = data.name;
     this._link = data.link;
     this._likes = data.likes.length;
     this._isLiked = false;
     this._user = user;
     this._popupSure = popupSure;    
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

  _handleLike(putLike, delLike){
   if (this._likeButton.classList.contains(this._selectorIsLiked)) {
      delLike(this);
   }
   else {
      putLike(this);
   }
  }

  togglelike(likesAmount) {
     if (this._likeButton.classList.contains(this._selectorIsLiked)) {      
      this._card.querySelector('.element__like-counter').textContent = likesAmount;
      this._likeButton.classList.remove(this._selectorIsLiked);
     } else {      
      this._card.querySelector('.element__like-counter').textContent = likesAmount;
      this._likeButton.classList.add(this._selectorIsLiked);
     }
  }

  deleteCard() {
     this._card.remove();
  }
  
  _setEventListeners(removePopup, putLike, delLike) {
     this._picture.addEventListener('click', () => this._handleCardClick(this._name, this._link));
     this._likeButton.addEventListener('click', () => this._handleLike(putLike, delLike));
     this._card.querySelector('.element__del').addEventListener('click', () => removePopup.open(this._card, this._id));     
  }  

  createCard(removePopup, putLike, delLike) {
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
        this._card.querySelector('.element__del').classList.remove('element__del_hidden');
     }
     this.togglelike= this.togglelike;
     this._setEventListeners(removePopup, putLike, delLike);     
     return this._card;
  }
};