const popups = document.querySelectorAll('.popup');
const popupImage = document.querySelector('.popup_img');
const windowAdd = document.querySelector('.popup_add');
const buttonFormAdd = windowAdd.querySelector('.popup__form_add');
const titleInput = buttonFormAdd.querySelector('.popup__name_add');
const linkInput = buttonFormAdd.querySelector('.popup__link_add');
const windowEdit = document.querySelector('.popup_edit');
const buttonFormEdit = windowEdit.querySelector('.popup__form_edit');
const fieldEditProfileName = buttonFormEdit.querySelector('.popup__name_edit');
const fieldEditProfileJob = buttonFormEdit.querySelector('.popup__job_edit');

export {
  popups,
  popupImage,
  windowAdd,
  buttonFormAdd,
  titleInput,
  linkInput,
  buttonFormEdit,
  windowEdit,
  fieldEditProfileName,
  fieldEditProfileJob,
};
