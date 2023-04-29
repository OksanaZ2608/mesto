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
const template = document.getElementById('template');
const popupCards = document.querySelector('.popup-cards') // карточки
const cardAddButtonElement = document.querySelector('.profile__add-button'); // кнопка добавить карточку
const imageName = document.querySelector('.popup__input_image_name'); //название картинки
const imageLink = document.querySelector('.popup__input_image_link'); //ссылка на картинку
const zoomCards = document.querySelector('.popup-zoom-cards');
const zoomImage = document.querySelector('.popup__zoom-image');
const zoomTitle = document.querySelector('.popup__zoom-title');
const popupCardsCloseButtonElement = document.querySelector('.popup__close-cards-btn'); //кнопка закрытия формы для добавления карточки
const cardCreateButton = document.querySelector('.popup__create-btn'); //кнопка создать
const zoomCloseButtonElement = document.querySelector('.popup__close-zoom-btn'); //кнопка закрыть зум


//Открываем Поп-ап
const openPopup = function (popupElement) {
  popupElement.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupByEscape);
}

//Закрываем поп-ап без сохранения изменений
const closePopup = function (popupElement) {
  popupElement.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupByEscape);
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

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function submitEditProfileForm(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  userName.textContent = nameInput.value;
  aboutUser.textContent = descriptionInput.value;
  //После отправки формы автоматически закрываем поп-ап
  closePopup(popupEditProfile);
}

//Закрытие формы при нажатии на крестик без сохранения
const closeCardsForm = function () {
  closePopup(popupCards);
}

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

//создание карточки
function createCard(card) {
  const cardTemplate = template.content.cloneNode(true);
  const cardTitle = cardTemplate.querySelector('.element__title');//название карточки
  const cardImage = cardTemplate.querySelector('.element__image');//изображение карточки
  const deleteCardButton = cardTemplate.querySelector('.element__delete-btn');//удалить карточку
  cardTitle.textContent = card.name;
  cardImage.setAttribute('src', card.link);
  cardImage.setAttribute('alt', card.name);
  deleteCardButton.addEventListener('click', function (evt) {
    evt.target.closest('.element').remove();
  });//удаление карточки
  cardTemplate.querySelector('.element__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like-active');
  });//поставить и убрать лайк
  cardImage.addEventListener('click', function (evt) {
    const cardTitle = evt.target.getAttribute('alt');
    const cardAlt = evt.target.getAttribute('alt');
    zoomImage.setAttribute('src', evt.target.src);
    zoomImage.setAttribute('alt', cardAlt);
    zoomTitle.textContent = cardTitle;
    openPopup(zoomCards);//зум фото с подписью
  });
  return cardTemplate;
}

function renderCard(card, cardElements) {
  const cardTemplate = createCard(card);
  cardElements.prepend(cardTemplate);
}

function handleFormCards(evt) {
  evt.preventDefault();
  const title = imageName.value;
  const link = imageLink.value;
  const newCard = {
    name: title,
    link: link
  }
  renderCard(newCard, cardElements);
  closeCardsForm();
}

initialCards.forEach((card) => {
  const cardElement = createCard(card);
  cardElements.prepend(cardElement);
});

// // //Функция удаления сообщений об ошибке с попапов, содержащих формы
// const test = function () {
//   const allPopups = Array.from(document.querySelectorAll('.popup'));
//   allPopups.forEach((currentPopup) => {
//     if (!currentPopup.classList.contains('popup_opened')) {
//       if (currentPopup.querySelector(validationConfig.formSelector) !== null) {
//         const currentForm = currentPopup.querySelector(validationConfig.formSelector);
//         const currentInputs = Array.from(currentForm.querySelectorAll(validationConfig.inputSelector));
//         currentInputs.forEach((currentInput) => {
//           hideInputError(currentForm, currentInput);
//         });
//       }
//     }
//   });
// };

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