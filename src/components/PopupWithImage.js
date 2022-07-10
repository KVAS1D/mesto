import  Popup  from "./Popup.js";

export default class PopupWithImage extends Popup{
   constructor(popupSelector) {
      super(popupSelector);
      this._popupImageElement = this._popup.querySelector('.popup__image');
      this._popupImageDescription = this._popup.querySelector('.popup__title-image');
   }
   open(name, link) {
      this._popupImageElement.alt = name;
      this._popupImageElement.src = link;
      this._popupImageDescription.textContent = name;
      super.open();
   }
}