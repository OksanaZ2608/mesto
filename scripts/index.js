const popupElement = document.querySelector('.popup'); //попап
const popupEditProfile = document.querySelector('.popup-profile') //попап редактировать профиль
const popupCloseButtonElement = popupElement.querySelector('.popup__close-btn'); //закрыть попап
const popupSubmitButtonElement = popupElement.querySelector('.popup__submit-btn'); //кнопка сохранить 
const popupForm = popupElement.querySelector('.popup__form'); //форма попап
const formProfile = document.querySelector('.popup__form-profile'); //форма профиля
const formCards = document.querySelector('.popup__form-cards'); //форма для карточки
const nameInput = popupElement.querySelector('.popup__input_user_name'); //инпут имя
const descriptionInput = popupElement.querySelector('.popup__input_user_description'); //инпут профессия
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
}

//Закрываем поп-ап без сохранения изменений
const closePopup = function (popupElement) {
  popupElement.classList.remove('popup_opened');
}

//Заргружаем в input значения со страницы
function openEditProfilePopup() {
  openPopup(popupEditProfile);
  nameInput.value = userName.textContent;
  descriptionInput.value = aboutUser.textContent;
}

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleFormSubmit(evt) {
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

//создание карточки
function createCard(card) {
  const cardTemplate = template.content.cloneNode(true);
  const cardTitle = cardTemplate.querySelector('.element__title');//название карточки
  const cardImage = cardTemplate.querySelector('.element__image');//изображение карточки
  const deleteCardButton = cardTemplate.querySelector('.element__delete-btn');//удалить карточку
  cardTitle.textContent = card.title;
  cardImage.setAttribute('src', card.link);
  cardImage.setAttribute('alt', card.title);
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
    title: title,
    link: link
  }
  renderCard(newCard, cardElements);
  closeCardsForm();
}

initialCards.forEach((card) => {
  const cardElement = createCard(card);
  cardElements.appendChild(cardElement);
});

profileEditButtonElement.addEventListener('click', openEditProfilePopup);
popupCloseButtonElement.addEventListener('click', function () {
  closePopup(popupEditProfile);
});

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
popupForm.addEventListener('submit', handleFormSubmit);

//Добавление карточки
cardAddButtonElement.addEventListener('click', function () {
  openPopup(popupCards);
  formCards.reset();
});

popupCardsCloseButtonElement.addEventListener('click', closeCardsForm);

formCards.addEventListener('submit', handleFormCards);

//закрытие зума
zoomCloseButtonElement.addEventListener('click', function () {
  closePopup(zoomCards);
})