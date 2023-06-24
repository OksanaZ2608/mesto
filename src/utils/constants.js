export const profile = document.querySelector('.profile'); //профиль
export const userName = profile.querySelector('.profile__user'); //юзер
export const aboutUser = profile.querySelector('.profile__about-user'); //профессия
export const profileEditButtonElement = profile.querySelector('.profile__edit'); //кнопка редактировать профиль
export const popupEditProfile = document.querySelector('.popup-profile') //попап редактировать профиль
export const formEditProfile = document.querySelector('.popup__form-profile'); //форма изменения профиля
export const editSubmitButton = document.querySelector('.popup__submit-btn');
export const cardAddButtonElement = document.querySelector('.profile__add-button'); // кнопка добавить карточку
export const popupCards = document.querySelector('.popup-cards') // карточки
export const formAddCard = document.querySelector('.popup__form-cards'); //форма для карточки
export const cardCreateButton = document.querySelector('.popup__create-btn'); // кнопка создать картинку
export const zoomCards = document.querySelector('.popup-zoom-cards');
export const elementsCardSelector = ".elements"; //разметка ul
//валидация
export const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-btn',
  inactiveButtonClass: 'popup__submit-btn_disable',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

const kuba = new URL('https://images.unsplash.com/photo-1589786410666-696402c6f665?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8JUQwJUJBJUQxJTgzJUQwJUIxJUQwJUIwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60', import.meta.url);
const portugal = new URL('https://images.unsplash.com/photo-1590645780426-accd5cf52c6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8JUQwJTlGJUQwJUJFJUQxJTgwJUQxJTgyJUQxJTgzJUQwJUIzJUQwJUIwJUQwJUJCJUQwJUI4JUQxJThGfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60', import.meta.url);
const buenavista = new URL('https://images.unsplash.com/photo-1589407622713-acc88125b651?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80', import.meta.url);
const rum = new URL('https://images.unsplash.com/photo-1573071314619-f56c103c2b68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fCVEMSU4MCVEMCVCOCVEMCVCQ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60', import.meta.url);
const abhazya = new URL('https://images.unsplash.com/photo-1601035595862-379449b19c02?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fCVEMCVCMCVEMCVCMSVEMSU4NSVEMCVCMCVEMCVCNyVEMCVCOCVEMSU4RnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60', import.meta.url);
const sochi = new URL('https://images.unsplash.com/photo-1666088605090-0e2641477439?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fCVEMSU4MSVEMCVCRSVEMSU4NyVEMCVCOHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60', import.meta.url);

export const initialCards = [
  {
      name: 'Куба',
      link: kuba
  },
  {
      name: 'Португалия',
      link: portugal
  },
  {
      name: 'Буэнависта',
      link: buenavista
  },
  {
      name: 'Рим',
      link: rum
  },
  {
      name: 'Абхазия',
      link: abhazya
  },
  {
      name: 'Сочи',
      link: sochi
  }
];