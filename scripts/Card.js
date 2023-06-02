export default class Card {
  constructor(card, templateSelector, popupElements, setPopupImageAttributes) {
    this._name = card.name;
    this._link = card.link;
    this._templateSelector = templateSelector;
    this._popup = popupElements;
    this._setPopupImageAttributes = setPopupImageAttributes;
  }

  _createCardElement() {
    const cardElement = document.querySelector("#template").content 
    .querySelector(this._templateSelector)
    .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._createCardElement();
    this._cardImage = this._element.querySelector('.element__image');
    this._cardTitle = this._element.querySelector('.element__title');
    this._likeButton = this._element.querySelector('.element__like');
    this._deleteButton = this._element.querySelector('.element__delete-btn');

    this._setEventListeners();

    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._cardTitle.textContent = this._name;

    return this._element;
  }

  _setEventListeners() {
    this._likeButton.addEventListener('click', () => {
      this._handleLike();
    });
    this._deleteButton.addEventListener('click', () => {
      this._handleDelete();
    });
    this._cardImage.addEventListener('click', () => {
      this._setPopupImageAttributes(this._link, this._name, this._popup);
    });
  }

  _handleLike() {
    this._likeButton.classList.toggle("element__like-active");
  }

  _handleDelete() {
    this._element.remove();
    this._element = null;
  }
}
