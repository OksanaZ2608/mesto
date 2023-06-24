import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import {
  userName,
  aboutUser,
  profileEditButtonElement,
  popupEditProfile,
  formEditProfile,
  editSubmitButton,
  cardAddButtonElement,
  popupCards,
  formAddCard,
  cardCreateButton,
  zoomCards,
  elementsCardSelector,
  validationConfig,
  initialCards
} from '../utils/constants.js';
//профиль

//валидация
const formEditProfileValidator = new FormValidator(validationConfig, formEditProfile);
const formAddCardValidator = new FormValidator(validationConfig, formAddCard);

function createCard(element) {
  const card = new Card(element, '#template', openImagePopup);
  const cardElement = card.generateCard();
  return cardElement;
};

const cardList = new Section({
  items: initialCards,
  renderer: (item) => cardList.addItem(createCard(item))
}, elementsCardSelector);

const imagePopup = new PopupWithImage(zoomCards);

function openImagePopup(name, link) {
  imagePopup.open(name, link);
};
//попап создания карточки
const newCardPopup = new PopupWithForm(
  popupCards,
  {
    handleFormSubmit: (formData) => {
      const info = {
        name: formData.imagename,
        link: formData.url
      }
      cardList.addItem(createCard(info));
    }
  }
);

//Добавление карточки
cardAddButtonElement.addEventListener('click', function () {
  formAddCardValidator.resetValidation();
  formAddCardValidator.disableButton(cardCreateButton);
  newCardPopup.open();
});
//экземпляр профиля
const profileInfo = new UserInfo({
  name: userName,
  description: aboutUser
});

//попап профиля
const profilePopup = new PopupWithForm(
  popupEditProfile,
  {
    handleFormSubmit: (data) => {
      const info = {
        name: data.username,
        description: data.description
      }
      profileInfo.setUserInfo(info);
    }
  }
);

profileEditButtonElement.addEventListener('click', function () {
  formEditProfileValidator.resetValidation();
  profilePopup.setInputValues(profileInfo.getUserInfo());
  formEditProfileValidator.enableButton(editSubmitButton);
  profilePopup.open();
});

//вызов методов
formEditProfileValidator.enableValidation();
cardList.renderItems();
formAddCardValidator.enableValidation();
newCardPopup.setEventListeners();
profilePopup.setEventListeners();
imagePopup.setEventListeners();