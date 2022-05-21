const profileEdit = document.querySelector(".profile__edit");
const buttonAdd = document.querySelector(".profile__add");
const windowEdit = document.querySelector(".popup_edit");
const windowAdd = document.querySelector(".popup_add");
const buttonCloseEditPopup = document.querySelector(".popup__close_edit");
const buttonCloseAddPopup = document.querySelector(".popup__close_add");
const profileName = document.querySelector(".profile__name");
const fieldEditProfileName = document.querySelector(".popup__name_edit");
const profileJob = document.querySelector(".profile__job");
const fieldEditJob = document.querySelector(".popup__job_edit");
const formEdit = document.querySelector(".popup__form_edit");
const elements = document.querySelector(".elements");
const formAdd = document.querySelector(".popup__form_add");
const nameInput = document.querySelector(".popup__name_add");
const linkInput = document.querySelector(".popup__link_add");
const cardElement = document.querySelector("#elements").content.querySelector(".element");
const popupOpenImage = document.querySelector(".popup_image");
const popupImage = document.querySelector(".popup__image");
const popupImageTitle = document.querySelector(".popup__title-image");
const buttonClosePopupImage = document.querySelector(".popup__close_image");




function popupElementClose(close) {
  close.classList.remove("popup_is-active");
}

function popupElementOpen(open) {
  open.classList.add("popup_is-active");
}

function editWindowOpen() {
  popupElementOpen(windowEdit);
  fieldEditProfileName.value = profileName.textContent;
  fieldEditJob.value = profileJob.textContent;
}

function saveInfo(e) {
  e.preventDefault();
  profileName.textContent = fieldEditProfileName.value;
  profileJob.textContent = fieldEditJob.value;
  popupElementClose(windowEdit);
}

function formSubmitAdd(e) {
  e.preventDefault();
  elements.prepend(elementGenerate({ link: linkInput.value, name: nameInput.value }));
  popupElementClose(windowAdd);
}

function like(e) {
  e.target.classList.toggle("element__like_active");
}

function classDelete(element) {
  element.remove();
}

function popupImageFill(imagePopup, titleImagePopup, card) {
  imagePopup.src = card.link;
  imagePopup.alt = card.name;
  titleImagePopup.textContent = card.name;
}

function elementGenerate(addCard) {
  const newElement = cardElement.cloneNode(true);
  const cardTitle = newElement.querySelector(".element__title");
  const cardImage = newElement.querySelector(".element__image");
  cardImage.src = addCard.link;
  cardImage.alt = addCard.name;
  cardTitle.textContent = addCard.name;

  const ButtonLike = newElement.querySelector(".element__like");
  ButtonLike.addEventListener("click", like);

  const buttonDelete = newElement.querySelector(".element__del");

  buttonDelete.addEventListener("click", CardDelete);

  function CardDelete() {
    classDelete(newElement);
  }
  cardImage.addEventListener("click", openPopupImage);

  function openPopupImage() {
    popupImageFill(popupImage, popupImageTitle, addCard);
    popupElementOpen(popupOpenImage);
  }

  return newElement;
}


profileEdit.addEventListener("click", editWindowOpen);

buttonCloseEditPopup.addEventListener("click", () => {
  popupElementClose(windowEdit);
});

buttonAdd.addEventListener("click", () => {
  popupElementOpen(windowAdd);
});

buttonCloseAddPopup.addEventListener("click", () => {
  popupElementClose(windowAdd);
});

formEdit.addEventListener("submit", saveInfo);

formAdd.addEventListener("submit", formSubmitAdd);

buttonClosePopupImage.addEventListener("click", () => {
  popupElementClose(popupOpenImage);
});

initialCards.forEach((addCard) => {
  elements.append(elementGenerate(addCard));
});
