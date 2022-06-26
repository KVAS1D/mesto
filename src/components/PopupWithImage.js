import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImageElement = this._popup.querySelector('.popup__image');
    this._popupImageDescription = this._popup.querySelector('.popup__title-image');
  }

  open(e) {
    super.open();
    this._popupImageElement.src = e.target.src;
    this._popupImageElement.alt = e.target.alt;

    this._popupImageDescription.textContent = this._popupImageElement.alt;
  }
}
