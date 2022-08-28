import  PopupWithForm  from './PopupWithForm.js';

export default class PopupWithConfirmation extends PopupWithForm{
   constructor({ selector, submitFunction}) {
      super({ selector, submitFunction });
   }
   _submitForm = (ev) => {
      ev.preventDefault();
      this._submitFunction(this._idCard);      
   }   
   
   open(target, id) {      
      this._targetCard = target;
      this._idCard = id;
      super.open();
   }
}