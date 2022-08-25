import PopupWithConfirmation from '../components/PopupWithConfirmation.js'
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import './index.css';
import { valid, buttonEditProfile, avatar, fieldEditProfileName, fieldEditProfileJob, buttonFotoAdd } from '../utils/constants.js';
import Api from '../components/Api.js';

const api = new Api({
   baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-44',
   headers: {
      authorization: 'eba047a0-9a84-4b5f-a16d-8cb313301f0e',
      'Content-Type': 'application/json',
   },
});

const createCard = function (card) {
   const userCard = new Card(card, '.template', handleCardClick, popupSure, putLike, delLike, userInfo.id);
   return userCard.createCard();
}

const insertCard = (card) => {
   const newCard = [{
      name: card.name,
      link: card.link,
      likes: card.likes,
      id: card._id,
      owner: card.owner._id
   }];
   const cardElement = createCard(newCard);
   section.addItem(cardElement);

}


const section = new Section({
   items: [],
   renderer: (card) => {
      insertCard(card);
   }
}, '.elements');


const userInfo = new UserInfo({
   name: '.profile__name',
   description: '.profile__job',
   avatar: '.profile__image'
});

const getUserInfo = () => {
   Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([userData, cards]) => {
         userInfo.setUserInfo(userData.name, userData.about, userData.avatar, userData._id);
         section.renderItems(cards)
      })
   .catch(api.catchError);
}

getUserInfo();

const popupProfile = new PopupWithForm({
   selector: '.popup_edit',
   submitFunction: (input) => {
      api.setUserInfo(input.profilename, input.profiledescription)
         .then((result) => {
            userInfo.setUserInfo(result.name, result.about, result.avatar);
            popupProfile.close();
         })
         .catch(api.catchError)
         .finally(() => {
            popupProfile.setDefaultText();
         })
   }
});
popupProfile.setEventListeners();

buttonEditProfile.addEventListener('click', function () {
   const profile = userInfo.getUserInfo();
   fieldEditProfileName.value = profile.name;
   fieldEditProfileJob.value = profile.job;
   popupProfile.open();
});

const validProfile = new FormValidator(valid, popupProfile._form);
validProfile.enableValidation();


const popupAvatar = new PopupWithForm({
   selector: '.popup_edit_photo',
   submitFunction: (input) => {
      api.setAvatar(input.avatar)
         .then((result) => {
            userInfo.setUserInfo(result.name, result.about, result.avatar);
            popupAvatar.close();
         })
         .catch(api.catchError)
         .finally(() => {
            popupAvatar.setDefaultText();
         })
   }
});
popupAvatar.setEventListeners();
const validAvatar = new FormValidator(valid, popupAvatar._form);
validAvatar.enableValidation();

avatar.addEventListener('click', function () {
   validAvatar.disableButton();
   popupAvatar.open()
})

const popupCards = new PopupWithForm({
   selector: '.popup_add',
   submitFunction: (input) => {

      api.addCard(input.fotoname, input.fotolink)
         .then((card) => {
            insertCard(card);
            popupCards.close();
         })
         .catch(api.catchError)
         .finally(() => {
            popupCards.setDefaultText();
         })
   }
});
popupCards.setEventListeners();

buttonFotoAdd.addEventListener('click', () => {
   validPopupAdd.disableButton();
   popupCards.open();
});

const delLike = function (card) {   
   api.deleteLike(card._id)

      .then((result) => {         
         card.togglelike(result.likes.length);
      })
      .catch(api.catchError);
}
const putLike = function (card) {
   api.putLike(card._id)
      .then((result) => {
         card.togglelike(result.likes.length);
      })
      .catch(api.catchError);
}
const validPopupAdd = new FormValidator(valid, popupCards._form);
validPopupAdd.enableValidation();

const popupSure = new PopupWithConfirmation({
   selector: '.popup_type_sure',
   submitFunction: (photo, id) => {
      api.deleteCard(id)
         .then(() => {
            photo.remove()
            popupSure.close();
         })
         .catch(api.catchError);
   }
});
popupSure.setEventListeners();


const popupWithImage = new PopupWithImage('.popup_img');
popupWithImage.setEventListeners();

const handleCardClick = (name, link) => {
   popupWithImage.open(name, link)
}