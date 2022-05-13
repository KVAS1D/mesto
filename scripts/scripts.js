let popup = document.querySelector('.popup');
let openPopup = document.querySelector('.profile__edit');
let closePopup = popup.querySelector('.popup__close');
let profileTitle = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');
let formElement = document.querySelector('.form');
let nameInput = formElement.querySelector('#name');
let jobInput = formElement.querySelector('#description');

function togglePopup() {
  popup.classList.toggle('popup_opened');
}

function formSubmitHandler (evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  togglePopup();
}

closePopup.addEventListener('click', togglePopup);

formElement.addEventListener('submit', formSubmitHandler);

openPopup.addEventListener('click', function () {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileJob.textContent;
  togglePopup();
});


