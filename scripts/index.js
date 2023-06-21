import initialCards from "./data.js";
import Card from "./Card.js";
import FormValidator from "./FormValidator.js";

//профиль
const profile = document.querySelector('.profile'); //профиль
const userName = profile.querySelector('.profile__user'); //юзер
const aboutUser = profile.querySelector('.profile__about-user'); //профессия
const profileEditButtonElement = profile.querySelector('.profile__edit'); //кнопка редактировать профиль
const popupEditProfile = document.querySelector('.popup-profile') //попап редактировать профиль

//форма профиля
const formEditProfile = document.querySelector('.popup__form-profile'); //форма профиля
const nameInput = popupEditProfile.querySelector('.popup__input_user_name'); //инпут имя
const descriptionInput = popupEditProfile.querySelector('.popup__input_user_description'); //инпут профессия
const editSubmitButton = formEditProfile.querySelector('.popup__submit-btn');

//карточки
const cardAddButtonElement = document.querySelector('.profile__add-button'); // кнопка добавить карточку
const popupCards = document.querySelector('.popup-cards') // карточки

//форма карточек
const formAddCard = document.querySelector('.popup__form-cards'); //форма для карточки
const imageName = document.querySelector('.popup__input_image_name'); //название картинки
const imageLink = document.querySelector('.popup__input_image_link'); //ссылка на картинку 
const cardCreateButton = document.querySelector('.popup__create-btn'); // кнопка создать картинку

//зум картинки
const zoomCards = document.querySelector('.popup-zoom-cards');
const zoomImage = document.querySelector('.popup__zoom-image');
const zoomTitle = document.querySelector('.popup__zoom-title');

const popupCloseButtonElements = document.querySelectorAll('.popup__close-btn'); //закрыть попап

//валидация
const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-btn',
  inactiveButtonClass: 'popup__submit-btn_disable',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

const formEditProfileValidator = new FormValidator(validationConfig, formEditProfile);
formEditProfileValidator.enableValidation();

const formAddCardValidator = new FormValidator(validationConfig, formAddCard);
formAddCardValidator.enableValidation();

// карточки
const cardsContainer = document.querySelector('.elements');

function createCard(element) {
  const card = new Card(element, '.card-template', openImagePopup);
  const cardElement = card.generateCard();
  return cardElement;
};

initialCards.forEach((element) => {
  cardsContainer.prepend(createCard(element));
});

//Открываем Поп-ап
const openPopup = function (popupElement) {
  popupElement.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupByEscape);
  popupElement.addEventListener('mousedown', handleClosePopupByOverlay);
}

//Закрываем поп-ап без сохранения изменений
const closePopup = function (popupElement) {
  popupElement.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupByEscape);
  popupElement.removeEventListener('mousedown', handleClosePopupByOverlay);
}

//закрытие popup при нажатии на х
popupCloseButtonElements.forEach((element) => {
  const popupElement = element.closest('.popup');
  element.addEventListener('click', () => {
    closePopup(popupElement);
  })
});

function openImagePopup(name, link) {
  zoomImage.src = link;
  zoomImage.alt = name;
  zoomTitle.textContent = name;
  openPopup(zoomCards);
};

//закрытие popup при нажатии на overlay
const handleClosePopupByOverlay = (event) => {
  if (event.target !== event.currentTarget) {
    return;
  }
  closePopup(event.currentTarget);
};

////закрытие popup при нажатии на escape
const closePopupByEscape = function (event) {
  if (event.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  }
};

//edit profile
function openEditProfilePopup() {
  openPopup(popupEditProfile);
  nameInput.value = userName.textContent;
  descriptionInput.value = aboutUser.textContent;
}

profileEditButtonElement.addEventListener('click', function () {
  formEditProfileValidator.hideInputError(nameInput);
  formEditProfileValidator.hideInputError(descriptionInput);
  formEditProfileValidator.enableButton(editSubmitButton);
  openEditProfilePopup(popupEditProfile);
});

//Добавление карточки
cardAddButtonElement.addEventListener('click', function () {
  formAddCardValidator.hideInputError(imageLink);
  formAddCardValidator.hideInputError(imageName);
  formAddCard.reset();
  formAddCardValidator.disableButton(cardCreateButton);
  openPopup(popupCards);
});

// Обработчик «отправки» формы, хотя пока она никуда отправляться не будет
function handleProfileFormSubmit(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  userName.textContent = nameInput.value;
  aboutUser.textContent = descriptionInput.value;
  //После отправки формы автоматически закрываем поп-ап
  closePopup(popupEditProfile);
}

function handleFormCardsSubmit(evt) {
  evt.preventDefault();
  const addFormInput = {
    name: imageName.value,
    link: imageLink.value
  }
  cardsContainer.prepend(createCard(addFormInput));
  closePopup(popupCards);
};

// Прикрепляем обработчик к форме: он будет следить за событием “submit” - «отправка»
formEditProfile.addEventListener('submit', handleProfileFormSubmit);

formAddCard.addEventListener('submit', handleFormCardsSubmit);