class FormValidator {
    constructor(options, formSelector) {
        this.formSelector = formSelector;
        this.inputSelector = options.inputSelector;
        this.submitButtonSelector = options.submitButtonSelector;
        this.validButtonClass = options.validButtonClass;
        this.inputErrorClass = options.inputErrorClass;
        this.errorClass = options.errorClass;
    }

    _showInputError(formElement, inputElement, errorMessage) {
        const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(this.inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this.errorClass);
    }

    hideInputError(formElement, inputElement) {
        const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(this.inputErrorClass);
        errorElement.classList.remove(this.errorClass);
        errorElement.textContent = '';
    }
    _hasInvalidInput(inputList) {
        return inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        });
    }

    _toggleButtonState(inputList, popupButton) {
        if (this._hasInvalidInput(inputList)) {
            this.disableSubmitButton(popupButton, this.validButtonClass);
        } else {
            this.enableSubmitButton(popupButton, this.validButtonClass);
        }
    }

    disableSubmitButton(popupButton) {
        popupButton.classList.add(this.validButtonClass);
        popupButton.disabled = 'disabled';
    }

    enableSubmitButton(popupButton) {
        popupButton.classList.remove(this.validButtonClass);
        popupButton.disabled = '';
    }

    _isValid(formElement, inputElement) {
        if (!inputElement.validity.valid) {
            this._showInputError(formElement, inputElement, inputElement.validationMessage);
        } else {
            this.hideInputError(formElement, inputElement);
        }
    }

    _setEventListeners(formElement) {
        const inputList = Array.from(formElement.querySelectorAll(this.inputSelector));
        const popupButton = formElement.querySelector(this.submitButtonSelector);
        this._toggleButtonState(inputList, popupButton, this.validButtonClass);
        inputList.forEach((inputElement) => {
            inputElement.addEventListener("input", () => {
                this._isValid(formElement, inputElement);
                this._toggleButtonState(inputList, popupButton, this.validButtonClass);
            });
        });
    }
    
    enableValidation() {
        const formList = Array.from(document.querySelectorAll(this.formSelector));
        formList.forEach((formElement) => {
            formElement.addEventListener("submit", function (e) {
                e.preventDefault();
            });
            this._setEventListeners(formElement);
        });
    }
}

export default FormValidator;