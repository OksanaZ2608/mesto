import Popup from "./Popup.js";
export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImage = this._popupElement.querySelector('.popup__zoom-image'); //изображение попапа
    this._popupAboutImage = this._popupElement.querySelector('.popup__zoom-title');
  }

  open = (title, img) => {
    super.open();
    this._popupImage.src = img;
    this._popupImage.alt = title;
    this._popupAboutImage.textContent = title;
    
  }
}