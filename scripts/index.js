const popupElement = document.querySelector('.popup'); //попап
const popupProfile = document.querySelector('.popup-profile') //попап редактировать профиль
const popupCloseButtonElement = popupElement.querySelector('.popup__close-btn'); //закрыть попап
const popupSubmitButtonElement = popupElement.querySelector('.popup__submit-btn'); //кнопка сохранить 
let popupForm = popupElement.querySelector('.popup__form'); //форма попап
const formProfile = document.querySelector('.popup__form-profile'); //форма профиля
const formCards = document.querySelector('.popup__form-cards'); //форма для карточки
let nameInput = popupElement.querySelector('.popup__input_user_name'); //инпут имя
let descriptionInput = popupElement.querySelector('.popup__input_user_description'); //инпут профессия
let profile = document.querySelector('.profile'); //профиль
let userName = profile.querySelector('.profile__user'); //юзер
let aboutUser = profile.querySelector('.profile__about-user'); //профессия
const editButton = profile.querySelector('.profile__edit'); //кнопка редактировать профиль
const cardElements = document.querySelector('.elements');
const popupCards = document.querySelector('.popup-cards') // карточки
const addButton = document.querySelector('.profile__add-button'); // кнопка добавить карточку
const imageName = document.querySelector('.popup__input_image_name'); //название картинки
const imageLink = document.querySelector('.popup__input_image_link'); //ссылка на картинку
const zoomCards = document.querySelector('.popup-zoom-cards');
const zoomImage = document.querySelector('.popup__zoom-image');
const zoomTitle = document.querySelector('.popup__zoom-title');
const popupCloseCards = document.querySelector('.popup__close-cards-btn'); //кнопка закрытия формы для добавления карточки
const CreateButton = document.querySelector('.popup__create-btn'); //кнопка создать
const zoomCloseButton = document.querySelector('.popup__close-zoom-btn'); //кнопка закрыть зум

//Открываем Поп-ап
function openPopup(popupElement) {
  popupElement.classList.add('popup_opened');
}

//Закрываем поп-ап без сохранения изменений
function closePopup(popupElement) {
  popupElement.classList.remove('popup_opened');
}

//Заргружаем в input значения со страницы
function openEditProfilePopup() {
  openPopup(popupProfile);
  nameInput.value = userName.textContent;
  descriptionInput.value = aboutUser.textContent;
}

editButton.addEventListener('click', openEditProfilePopup);
popupCloseButtonElement.addEventListener('click', closePopup);


// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleFormSubmit(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  userName.textContent = nameInput.value;
  aboutUser.textContent = descriptionInput.value;
  //После отправки формы автоматически закрываем поп-ап
  closePopup(popupProfile);
}
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
popupForm.addEventListener('submit', handleFormSubmit);

//Добавление карточки
addButton.addEventListener('click', function () {
  popupCards.classList.add('popup_opened');
  formCards.reset();
});

//Закрытие формы при нажатии на крестик без сохранения
const closeCards = function () {
  popupCards.classList.remove('popup_opened');
}
popupCloseCards.addEventListener('click', closeCards);

//создание карточки
function createCard(card) {
  const cardTemplate = document.getElementById('template').content.cloneNode(true);
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
  closeCards();
}
formCards.addEventListener('submit', handleFormCards);

const initialCards = [
  {
    title: 'Куба',
    link: 'https://images.unsplash.com/photo-1589786410666-696402c6f665?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8JUQwJUJBJUQxJTgzJUQwJUIxJUQwJUIwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
  },
  {
    title: 'Португалия',
    link: 'https://images.unsplash.com/photo-1590645780426-accd5cf52c6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8JUQwJTlGJUQwJUJFJUQxJTgwJUQxJTgyJUQxJTgzJUQwJUIzJUQwJUIwJUQwJUJCJUQwJUI4JUQxJThGfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
  },
  {
    title: 'Буэнависта',
    link: 'https://images.unsplash.com/photo-1589407622713-acc88125b651?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80'
  },
  {
    title: 'Рим',
    link: 'https://images.unsplash.com/photo-1573071314619-f56c103c2b68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fCVEMSU4MCVEMCVCOCVEMCVCQ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'
  },
  {
    title: 'Абхазия',
    link: 'https://images.unsplash.com/photo-1601035595862-379449b19c02?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fCVEMCVCMCVEMCVCMSVEMSU4NSVEMCVCMCVEMCVCNyVEMCVCOCVEMSU4RnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'
  },
  {
    title: 'Сочи',
    link: 'https://images.unsplash.com/photo-1666088605090-0e2641477439?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fCVEMSU4MSVEMCVCRSVEMSU4NyVEMCVCOHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'
  }
];

initialCards.forEach((card) => {
  const cardElement = createCard(card);
  cardElements.appendChild(cardElement);
});

//закрытие зума
zoomCloseButton.addEventListener('click', function () {
  closePopup(zoomCards);
})
