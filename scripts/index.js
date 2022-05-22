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
const cardContainer = document.querySelector(".elements");
const formAdd = document.querySelector(".popup__form_add");
const nameInput = document.querySelector(".popup__name_add");
const linkInput = document.querySelector(".popup__link_add");
const cardElement = document.querySelector("#elements").content.querySelector(".element");
const popupOpenImage = document.querySelector(".popup_image");
const popupImage = document.querySelector(".popup__image");
const popupImageTitle = document.querySelector(".popup__title-image");
const buttonClosePopupImage = document.querySelector(".popup__close_image");

function closePopupElement(close) {
  close.classList.remove("popup_is-active");
}

function openPopupElement(open) {
  open.classList.add("popup_is-active");
}

function handleOpenEditProfileWindow() {
  openPopupElement(windowEdit);
  fieldEditProfileName.value = profileName.textContent;
  fieldEditJob.value = profileJob.textContent;
}

function saveInfo(e) {
  e.preventDefault();
  profileName.textContent = fieldEditProfileName.value;
  profileJob.textContent = fieldEditJob.value;
  closePopupElement(windowEdit);
}

function addFormSubmit(e) {
  e.preventDefault();
  cardContainer.prepend(generateElement({ link: linkInput.value, name: nameInput.value }));
  closePopupElement(windowAdd);
}

function toggle(e) {
  e.target.classList.toggle("element__like_active");
}

function deleteClass(element) {
  element.remove();
}

function fillPopupImage(imagePopup, titleImagePopup, card) {
  imagePopup.src = card.link;
  imagePopup.alt = card.name;
  titleImagePopup.textContent = card.name;
}

function generateElement(cardAdd) {
  const newElement = cardElement.cloneNode(true);
  const cardTitle = newElement.querySelector(".element__title");
  const cardImage = newElement.querySelector(".element__image");
  cardImage.src = cardAdd.link;
  cardImage.alt = cardAdd.name;
  cardTitle.textContent = cardAdd.name;

  const buttonLike = newElement.querySelector(".element__like");
  buttonLike.addEventListener("click", toggle);

  const buttonDelete = newElement.querySelector(".element__del");

  buttonDelete.addEventListener("click", deleteCard);

  function deleteCard() {
    deleteClass(newElement);
  }
  cardImage.addEventListener("click", openPopupImage);

  function openPopupImage() {
    fillPopupImage(popupImage, popupImageTitle, cardAdd);
    openPopupElement(popupOpenImage);
  }

  return newElement;
}


profileEdit.addEventListener("click", handleOpenEditProfileWindow);

buttonCloseEditPopup.addEventListener("click", () => {
  closePopupElement(windowEdit);
});

buttonAdd.addEventListener("click", () => {
  openPopupElement(windowAdd);
});

buttonCloseAddPopup.addEventListener("click", () => {
  closePopupElement(windowAdd);
});

formEdit.addEventListener("submit", saveInfo);

formAdd.addEventListener("submit", addFormSubmit);

buttonClosePopupImage.addEventListener("click", () => {
  closePopupElement(popupOpenImage);
});

initialCards.forEach((cardAdd) => {
  cardContainer.append(generateElement(cardAdd));
});
