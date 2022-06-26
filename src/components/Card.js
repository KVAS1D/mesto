class Card {
  constructor(data, templateSelector, handleCardClick) {
    this._src = data.link;
    this._alt = data.title;
    this._templateSelector = templateSelector;

    this.handleCardClick = handleCardClick;
  }

  _togglelike() {
    this.buttonLike.classList.toggle('element__like_active');
  }

  _deleteCard() {
    this.buttonDelete.closest('.element').remove();
  }

  _setEventListeners() {
    this.buttonLike.addEventListener('click', () => {
      this._togglelike();
    });

    this.buttonDelete.addEventListener('click', () => {
      this._deleteCard();
    });

    this.cardImage.addEventListener('click', (e) => {
      this.handleCardClick(e);
    });
  }

  _generateElement() {
    this.cardElement = document.querySelector(this._templateSelector).content;

    this.newElement = this.cardElement
      .querySelector('.element')
      .cloneNode(true);

    this.buttonLike = this.newElement.querySelector('.element__like');
    this.buttonDelete = this.newElement.querySelector('.element__del');
    this.cardImage = this.newElement.querySelector('.element__image');

    this.cardImage.alt = this._alt;
    this.cardImage.src = this._src;
    this.newElement.querySelector('.element__title').textContent = this._alt;
  }

  renderCard() {
    this._generateElement();

    this._setEventListeners();
    return this.newElement;
  }
}

export default Card;
