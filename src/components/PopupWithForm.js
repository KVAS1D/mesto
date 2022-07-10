import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitListener) {
    super(popupSelector);
    this.submitListener = submitListener;
    this.inputs = this._popup.querySelectorAll('input');
    this.form = this._popup.querySelector('form');

  }

  _getInputValues() {
    this.inputsValue = {};
    this.inputs.forEach((item) => {
      this.inputsValue[item.name] = item.value;
    });
    return this.inputsValue;
  }

  setEventListeners() {
    super.setEventListeners();
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      this.submitListener(this._getInputValues());
    });

  }

  close() {
    super.close();
    this._resetForm();
  }

  _resetForm() {
    this.form.reset();
  }
}