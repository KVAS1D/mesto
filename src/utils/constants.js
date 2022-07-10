export const valid = {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  validButtonClass: 'popup__button_valid',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible',    
};

const buttonEditProfile = document.querySelector('.profile__edit');
const avatar = document.querySelector('.profile__image')
const fieldEditProfileName = document.querySelector('.popup__name_edit');
const fieldEditProfileJob = document.querySelector('.popup__job_edit');
const buttonFotoAdd = document.querySelector('.profile__add');

export {
  buttonEditProfile, 
  avatar, 
  fieldEditProfileName, 
  fieldEditProfileJob, 
  buttonFotoAdd
};