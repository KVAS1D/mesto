import { openPopupElement, popupImage } from './index.js';

class Card {
  constructor(data, cardSelector) {
    this._image = data.link;
    this._title = data.name;
    this._cardSelector = cardSelector;
    this.popupImage = popupImage;
  }

  _togglelike() {
    this.buttonLike.classList.toggle('element__like_active');
  }

  _deleteCard() {
    this.buttonDelete.closest(this._cardSelector).remove();
  }
  
  _setEventListeners() {
    this.buttonLike = this.newElement.querySelector('.element__like');
    this.buttonDelete = this.newElement.querySelector('.element__del');

    this.buttonLike.addEventListener('click', () => {
      this._togglelike();
    });

    this.buttonDelete.addEventListener('click', () => {
      this._deleteCard();
    });

    this.cardImage.addEventListener('click', () => {
      this._openPopupImage();
    });
  }
  
  _openPopupImage() {
    this.popupImageElement = document.querySelector('.popup__image');
    this.popupImageDescription = document.querySelector('.popup__title-image');
    this.popupImage = document.querySelector('.popup_img');

    this.popupImageElement.src = this._image;
    this.popupImageElement.alt = this._title;
    this.popupImageDescription.textContent = this._title;

    openPopupElement(this.popupImage);
  }

  _generateElement() {
    this.cardTemplate = document.querySelector('.template').content;
    this.newElement = this.cardTemplate
    .querySelector(this._cardSelector)
    .cloneNode(true);
    this.cardImage = this.newElement.querySelector('.element__image');

    this.cardImage.alt = this._title;
    this.cardImage.src = this._image;
    this.newElement.querySelector('.element__title').textContent = this._title;
  }

  renderCard() {
    this._generateElement();

    this._setEventListeners();
    return this.newElement;
  }
}

export default Card;
