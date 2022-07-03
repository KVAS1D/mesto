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

export const initialCards = [
  {
    title: "Крым",
    link: "https://top10a.ru/wp-content/uploads/2020/01/lastochkino_gnezdo_swallow_nest2-1shyu.jpg",
  },
  {
    title: "Петергоф",
    link: "https://kuda-spb.ru/uploads/d76af2f8fc698b0d26c7d9e46b626c34.jpg",
  },
  {
    title: "Санкт-Петербург",
    link: "https://traveltimes.ru/wp-content/uploads/2021/08/piter.jpg",
  },
  {
    title: "Москва",
    link: "https://imagesbase.ru/uploads/posts/2020-10/1601633197_imagesbase.ru.jpg",
  },
  {
    title: "Байкал",
    link: "https://mwtravel.ru/wp-content/uploads/2018/02/6-Buhta-Peschanaja-Poberezhe-Bajkala.jpg",
  },
  {
    title: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

export const valid = {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  validButtonClass: 'popup__button_valid',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error',
};