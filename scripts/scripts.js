const popup = document.querySelector('.popup');
const openPopup = document.querySelector('.profile__edit');
const closePopup = popup.querySelector('.popup__close');

let formElement = document.querySelector('.form');
let nameInput = formElement.querySelector('#name');
let jobInput = formElement.querySelector('#description');

function togglePopup() {
  popup.classList.toggle('popup__opened');
}

popup.addEventListener('click', function (evt) {
  if (evt.target === evt.currentTarget) {
    togglePopup();
  }
})

openPopup.addEventListener('click', togglePopup);
closePopup.addEventListener('click', togglePopup);

function formSubmitHandler (evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  togglePopup();
}

formElement.addEventListener('submit', formSubmitHandler);

console.log(nameInput.value);
console.log(jobInput.value);