const profileEdit = document.querySelector(".profile__edit");
const addButton = document.querySelector(".profile__add");
const editWindow = document.querySelector(".popup_edit");
const addWindow = document.querySelector(".popup_add");
const buttonCloseEditPopup = document.querySelector(".popup__close_edit");
const buttonCloseAddPopup = document.querySelector(".popup__close_add");
const profileName = document.querySelector(".profile__name");
const fieldEditProfileName = document.querySelector(".popup__name_edit");
const profileJob = document.querySelector(".profile__job");
const fieldEditJob = document.querySelector(".popup__job_edit");
const editForm = document.querySelector(".popup__form_edit");
const elements = document.querySelector(".elements");
const addForm = document.querySelector(".popup__form_add");
const inputName = document.querySelector(".popup__name_add");
const inputLink = document.querySelector(".popup__link_add");
const cardElement = document.querySelector("#elements").content.querySelector(".element");
const popupOpenImage = document.querySelector(".popup_image");
const popupImage = document.querySelector(".popup__image");
const popupImageTitle = document.querySelector(".popup__title-image");
const buttonClosePopupImage = document.querySelector(".popup__close_image");
const initialCards = [
  {
    name: "Крым",
    link: "https://top10a.ru/wp-content/uploads/2020/01/lastochkino_gnezdo_swallow_nest2-1shyu.jpg",
  },
  {
    name: "Петергоф",
    link: "https://kuda-spb.ru/uploads/d76af2f8fc698b0d26c7d9e46b626c34.jpg",
  },
  {
    name: "Санкт-Петербург",
    link: "https://traveltimes.ru/wp-content/uploads/2021/08/piter.jpg",
  },
  {
    name: "Москва",
    link: "https://imagesbase.ru/uploads/posts/2020-10/1601633197_imagesbase.ru.jpg",
  },
  {
    name: "Байкал",
    link: "https://mwtravel.ru/wp-content/uploads/2018/02/6-Buhta-Peschanaja-Poberezhe-Bajkala.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];



function closePopup(close) {
  close.classList.remove("popup_is-active");
}

function openPopup(open) {
  open.classList.add("popup_is-active");
}

function openEditWindow() {
  openPopup(editWindow);
  fieldEditProfileName.value = profileName.textContent;
  fieldEditJob.value = profileJob.textContent;
}

function saveInfo(e) {
  e.preventDefault();
  profileName.textContent = fieldEditProfileName.value;
  profileJob.textContent = fieldEditJob.value;
  closePopup(editWindow);
}

function addFormSubmit(e) {
  e.preventDefault();
  elements.prepend(generateElement({ link: inputLink.value, name: inputName.value }));
  closePopup(addWindow);
}

function like(e) {
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

function generateElement(addCard) {
  const newElement = cardElement.cloneNode(true);
  const cardTitle = newElement.querySelector(".element__title");
  const cardImage = newElement.querySelector(".element__image");
  cardImage.src = addCard.link;
  cardImage.alt = addCard.name;
  cardTitle.textContent = addCard.name;

  const likeButton = newElement.querySelector(".element__like");
  likeButton.addEventListener("click", like);

  const deleteButton = newElement.querySelector(".element__del");

  deleteButton.addEventListener("click", deleteCard);

  function deleteCard() {
    deleteClass(newElement);
  }
  cardImage.addEventListener("click", openPopupImage);

  function openPopupImage() {
    fillPopupImage(popupImage, popupImageTitle, addCard);
    openPopup(popupOpenImage);
  }

  return newElement;
}


profileEdit.addEventListener("click", openEditWindow);

buttonCloseEditPopup.addEventListener("click", () => {
  closePopup(editWindow);
});

addButton.addEventListener("click", () => {
  openPopup(addWindow);
});

buttonCloseAddPopup.addEventListener("click", () => {
  closePopup(addWindow);
});

editForm.addEventListener("submit", saveInfo);

addForm.addEventListener("submit", addFormSubmit);

buttonClosePopupImage.addEventListener("click", () => {
  closePopup(popupOpenImage);
});

initialCards.forEach((addCard) => {
  elements.append(generateElement(addCard));
});
