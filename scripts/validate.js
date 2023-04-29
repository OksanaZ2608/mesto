function setInputValidState(input, errorElement, parametrs) {
  input.classList.remove(parametrs.inputErrorClass);
  errorElement.textContent = '';
}

function setInputInvalideState(input, errorElement, parametrs) {
  input.classList.add(parametrs.inputErrorClass);
  errorElement.textContent = input.validationMessage;
}

function checkInputValidity(input, form, parametrs) {
  const errorElement = form.querySelector(`#${input.id}-error`);
  if (input.checkValidity()) {
    setInputValidState(input, errorElement, parametrs);
  } else {
    setInputInvalideState(input, errorElement, parametrs);
  }
}

function disableButton(parametrs, button) {
  button.setAttribute('disabled', '');
  button.classList.add(parametrs.inactiveButtonClass);
}

function enableButton(parametrs, button) {
  button.removeAttribute('disabled');
  button.classList.remove(parametrs.inactiveButtonClass);
}

function toggleButtonValidity(parametrs, form) {
  const submitButton = form.querySelector(parametrs.submitButtonSelector);
  if (form.checkValidity()) {
    enableButton(parametrs, submitButton);
  } else {
    disableButton(parametrs, submitButton);
  }
}

function setSubmitListener(parametrs, form) {
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    toggleButtonValidity(parametrs, form);
  });
}

function enableValidation(parametrs) {
  const forms = Array.from(document.querySelectorAll(parametrs.formSelector));

  forms.forEach((form) => {
    setSubmitListener(parametrs, form);
    const inputs = form.querySelectorAll(parametrs.inputSelector);
    const inputsArray = Array.from(inputs);
    inputsArray.forEach(function (input) {
      input.addEventListener('input', () => {
        checkInputValidity(input, form, parametrs);
        toggleButtonValidity(parametrs, form);
      });
    });
  });
}

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-btn',
  inactiveButtonClass: 'popup__submit-btn_disable',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
});