import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor (popupSelector, { handleFormSubmit }) {
    super (popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._formElement = this._popupElement.querySelector('.popup__form');
    this._inputList = this._formElement.querySelectorAll('.popup__input');
    this.submitButton = this._formElement.querySelector('.popup__submit-btn');
  };

  close () {
    super.close();
    this._formElement.reset();
  };

  _getInputValues () {
    this._inputValuesObjects = {};
    this._inputList.forEach((input) => {
      this._inputValuesObjects[input.name] = input.value
    });
    return this._inputValuesObjects;
  };

  setInputValues (dataObject) {
    this._inputList.forEach(input => input.value = dataObject[input.name]);
  };

  setEventListeners () {
    super.setEventListeners();
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
      this.close();
    });
  };
};