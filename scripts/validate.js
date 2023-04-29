const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-btn',
  inactiveButtonClass: 'popup__submit-btn_disable',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}

function setInputValidState(input, errorElement) {
  input.classList.remove(config.inputErrorClass);
  errorElement.textContent = '';
}

function setInputInvalideState(input, errorElement) {
  input.classList.add(config.inputErrorClass);
  errorElement.textContent = input.validationMessage;
}

function checkInputValidity(input, form) {
  const errorElement = form.querySelector(`#${input.id}-error`);
  if (input.checkValidity()) {
    setInputValidState(input, errorElement);
  } else {
    setInputInvalideState(input, errorElement);
  }
}

function disableButton({ inactiveButtonClass }, button) {
  button.setAttribute('disabled', '');
  button.classList.add(inactiveButtonClass);
}

function enableButton({ inactiveButtonClass }, button) {
  button.removeAttribute('disabled');
  button.classList.remove(inactiveButtonClass);
}

function toggleButtonValidity({ submitButtonSelector, ...rest }, form) {
  const submitButton = form.querySelector(submitButtonSelector);
  if (form.checkValidity()) {
    enableButton(rest, submitButton);
  } else {
    disableButton(rest, submitButton);
  }
}

function setSubmitListener(config, form) {
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    toggleButtonValidity(config, form);
  });
}

function enableValidation({ formSelector, inputSelector, ...rest }) {
  const forms = Array.from(document.querySelectorAll(formSelector));

  forms.forEach((form) => {
    setSubmitListener(rest, form);
    const inputs = form.querySelectorAll(inputSelector);
    const inputsArray = Array.from(inputs);
    inputsArray.forEach(function (input) {
      input.addEventListener('input', () => {
        checkInputValidity(input, form);
        toggleButtonValidity(rest, form);
      });
    });
  });
}

enableValidation(config);