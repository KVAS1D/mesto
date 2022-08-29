import  PopupWithForm  from './PopupWithForm.js';

export default class PopupWithConfirmation extends PopupWithForm{
   constructor({ selector, submitFunction}) {
      super({ selector, submitFunction });
      this._form = this._popup.querySelector('.popup__form');
   }
   _submitForm = (ev) => {
      ev.preventDefault();
      this._submitFunction(this._targetCard, this._idCard);      
   }   
   
   open(target, id) {      
      this._targetCard = target;
      this._idCard = id;
      super.open();
   }
   setEventListeners(){
      super.setEventListeners();
      this._form.addEventListener('submit', this._submitForm);
   } 
}