
const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__close-btn');
const popupSubmitButtonElement = popupElement.querySelector('.popup__submit-btn');
let popupForm = popupElement.querySelector('.popup__form');
let nameInput = popupElement.querySelector('.popup__input_user_name');
let descriptionInput = popupElement.querySelector('.popup__input_user_description');
let profile = document.querySelector('.profile');
let userName = profile.querySelector('.profile__user');
let aboutUser = profile.querySelector('.profile__about-user');
const editButton = profile.querySelector('.profile__edit');

const togglePopupVisibility = function () {
    popupElement.classList.toggle('popup_is-visible');
}

editButton.addEventListener('click', togglePopupVisibility);
popupCloseButtonElement.addEventListener('click', togglePopupVisibility);



function handleFormSubmit(evt) {
    evt.preventDefault();
    userName.textContent = nameInput.value;
    aboutUser.textContent = descriptionInput.value;
}

popupForm.addEventListener('submit', handleFormSubmit);

popupSubmitButtonElement.addEventListener('click', togglePopupVisibility);



