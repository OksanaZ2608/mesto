import initialCards from "./data.js";
import Card from "./Card.js";
import FormValidator from "./FormValidator.js";

const popupElements = document.querySelectorAll('.popup'); //попап
const popupEditProfile = document.querySelector('.popup-profile') //попап редактировать профиль
const popupCloseButtonElement = document.querySelectorAll('.popup__close-btn'); //закрыть попап
const formEditProfile = document.querySelector('.popup__form-profile'); //форма профиля
const formAddCard = document.querySelector('.popup__form-cards'); //форма для карточки
const nameInput = popupEditProfile.querySelector('.popup__input_user_name'); //инпут имя
const descriptionInput = popupEditProfile.querySelector('.popup__input_user_description'); //инпут профессия
const profile = document.querySelector('.profile'); //профиль
const userName = profile.querySelector('.profile__user'); //юзер
const aboutUser = profile.querySelector('.profile__about-user'); //профессия
const profileEditButtonElement = profile.querySelector('.profile__edit'); //кнопка редактировать профиль
const cardElements = document.querySelector('.elements');
const popupCards = document.querySelector('.popup-cards') // карточки
const cardAddButtonElement = document.querySelector('.profile__add-button'); // кнопка добавить карточку
const imageName = document.querySelector('.popup__input_image_name'); //название картинки
const imageLink = document.querySelector('.popup__input_image_link'); //ссылка на картинку
const zoomCards = document.querySelector('.popup-zoom-cards');
const zoomImage = document.querySelector('.popup__zoom-image');
const zoomTitle = document.querySelector('.popup__zoom-title');
const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-btn',
  errorSelector: '.popup__input-',
  inactiveButtonClass: 'popup__submit-btn_disable',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

//Открываем Поп-ап
const openPopup = function (popupElement) {
  popupElement.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupByEscape);
}

//Закрываем поп-ап без сохранения изменений
const closePopup = function (popupElement) {
  popupElement.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupByEscape);
  // formAddCardValidator.resetValidation();
  // formEditProfileValidator.resetValidation();
}

function disabledSubmitButton(popupElement) {
  const popupSubmitButtonElement = popupElement.querySelector('.popup__submit-btn');
  popupSubmitButtonElement.classList.add("popup__submit-btn_disable");
  popupSubmitButtonElement.setAttribute("disabled", true);
}

//Заргружаем в input значения со страницы
function openEditProfilePopup() {
  openPopup(popupEditProfile);
  nameInput.value = userName.textContent;
  descriptionInput.value = aboutUser.textContent;
}

const setPopupImageAttributes = (link, name) => {
  zoomImage.src = link;
  zoomImage.alt = name;
  zoomTitle.textContent = name;
  openPopup(zoomCards);
};

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function submitEditProfileForm(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  userName.textContent = nameInput.value;
  aboutUser.textContent = descriptionInput.value;
  //После отправки формы автоматически закрываем поп-ап
  closePopup(popupEditProfile);
}

// //Закрытие формы при нажатии на крестик без сохранения
// const closeCardsForm = function () {
//   closePopup(popupCards);
// }

//закрытие popup при нажатии на х
popupCloseButtonElement.forEach((element) => {
  const popupElement = element.closest('.popup');
  element.addEventListener('click', () => {
    closePopup(popupElement);
  })
});

////закрытие popup при нажатии на escape
const closePopupByEscape = function (event) {
  if (event.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  }
};

//закрытие popup при нажатии на overlay
const popupClosedByClickOnOverlay = function (event) {
  if (event.target !== event.currentTarget) {
    return;
  }
  closePopup(event.currentTarget);
};
popupElements.forEach(element => element.addEventListener('mousedown', popupClosedByClickOnOverlay));

const renderCard = (cardElement) => {
  cardElements.prepend(cardElement);
};

const createCard = (object, el, popupElements, func) => {
  const cardObj = new Card(object, el, popupElements, func);
  return cardObj.generateCard();
};

initialCards.forEach((item) => {
  renderCard(createCard(item, '.element', popupElements, setPopupImageAttributes));
});

function handleFormCards(evt) {
  evt.preventDefault();
  const name = imageName.value;
  const link = imageLink.value;
  imageName.value = '';
  imageLink.value = '';

  const card = {
    name,
    link,
  };
  const cardObj = new Card(card, '.element', popupElements, setPopupImageAttributes);
  renderCard(cardObj.generateCard());

  closePopup(popupCards);
};

profileEditButtonElement.addEventListener('click', openEditProfilePopup);

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formEditProfile.addEventListener('submit', submitEditProfileForm);

//Добавление карточки
cardAddButtonElement.addEventListener('click', function () {
  openPopup(popupCards);
  disabledSubmitButton(popupCards);
  formAddCard.reset();
});

formAddCard.addEventListener('submit', handleFormCards);

const formEditProfileValidator = new FormValidator(validationConfig, formEditProfile);
formEditProfileValidator.enableValidation();

const formAddCardValidator = new FormValidator(validationConfig, formAddCard);
formAddCardValidator.enableValidation();