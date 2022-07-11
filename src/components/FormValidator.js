export default class FormValidator{
  constructor(options, formSelector){
     this._formSelector = options.formSelector;
     this._inputSelector = options.inputSelector;
     this._submitButtonSelector = options.submitButtonSelector;
     this._validButtonClass = options.validButtonClass;
     this._inputErrorClass = options.inputErrorClass;
     this._errorClass = options.errorClass;
     this._formSelector = formSelector;
     this._inputList = Array.from(this._formSelector.querySelectorAll(this._inputSelector));     
     this._formButton = this._formSelector.querySelector(this._submitButtonSelector);   
  }

  _showInputError = (inputError, input) => {
     input.classList.add(this._inputErrorClass);
     inputError.textContent = input.validationMessage;
     inputError.classList.add(this._errorClass);
  }

  hideInputError = (inputError, input) => {
     input.classList.remove(this._inputErrorClass);
     inputError.textContent = " ";
     inputError.classList.remove(this._errorClass);
  }

  _hasInvalidInput = () => {
     return !this._inputList.some((input) => {
        return !input.validity.valid;
     })
  }

  enableSubmitButton = () => {
     this._formButton.classList.remove(this._validButtonClass);
     this._formButton.disabled = false;
  }

  disableButton = () => {
     this._formButton.classList.add(this._validButtonClass);
     this._formButton.disabled = true;
  }

  _checkSubmitButton = () => {
     if (this._hasInvalidInput()) {
        this.enableSubmitButton();
     }
     else {
        this.disableButton();
     }
  }

  _isValid = () => {
     this._inputList.forEach((input) => {
        const inputError = this._formSelector.querySelector(`.${input.name}-error`);
        input.addEventListener('input', () => { 
           if (!input.validity.valid) {
              this._showInputError(inputError, input);
           }
           else {
              this.hideInputError(inputError, input);
           }
           this._checkSubmitButton();
        })
     })
  }

  enableValidation = () => {     
     this._isValid();
  }
}