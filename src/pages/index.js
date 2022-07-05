import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import './index.css';
import { fieldEditProfileName, fieldEditProfileJob, initialCards, valid } from '../utils/constants.js';

const profileEdit = document.querySelector('.profile__edit');
const buttonAdd = document.querySelector('.profile__add');

const popupWithImage = new PopupWithImage('.popup_img');
popupWithImage.setEventListeners();

const section = new Section(
  {
    items: initialCards,
    renderer(item) {
      section.addItem(
        new Card(item, '.template', (e) => {
          popupWithImage.open(e);
        }).renderCard()
      );
    },
  },
  '.elements'
);
section.renderItems();

const userInfo = new UserInfo({
  name: '.profile__name',
  job: '.profile__job',
});

const cardValidator = new FormValidator(
  valid,
  '.popup__form_add'
);

cardValidator.enableValidation();

const popupCards = new PopupWithForm('.popup_add', (inputValues) => {
  section.addItem(new Card
    (inputValues, '.template', (e) => {
      popupWithImage.open(e);
    })
    .renderCard());
  popupCards.close();
});

popupCards.setEventListeners();

const popupProfile = new PopupWithForm('.popup_edit', (inputValues) => {
  const data = inputValues;
  userInfo.setUserInfo(data.name, data.descr);
  popupProfile.close();
});

popupProfile.setEventListeners();

const profileValidator = new FormValidator(
  valid,
  '.popup__form_edit'
);

profileValidator.enableValidation();

profileEdit.addEventListener('click', () => {
  popupProfile.open();

  const data = userInfo.getUserInfo();

  fieldEditProfileName.value = data.name;
  fieldEditProfileJob.value = data.job;

  profileValidator.resetValidation();
});

buttonAdd.addEventListener('click', () => {
  cardValidator.resetValidation();

  popupCards.open();
});
