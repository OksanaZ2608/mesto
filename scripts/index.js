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

//Открываем Поп-ап и видим значение со страницы
const openPopup = function () {
    popupElement.classList.add('popup_is-visible');
    nameInput.value = userName.textContent;
    descriptionInput.value = aboutUser.textContent;
}

//Закрываем поп-ап без сохранения изменений
const closePopup = function () {
    popupElement.classList.remove('popup_is-visible');
}

editButton.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleFormSubmit(evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    userName.textContent = nameInput.value;
    aboutUser.textContent = descriptionInput.value;
    //После отправки формы автоматически закрываем поп-ап
    closePopup(popupForm);
}
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
popupForm.addEventListener('submit', handleFormSubmit);

