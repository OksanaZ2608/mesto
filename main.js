(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,n){if("object"!==t(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}var n=function(){function t(e){var n=e.serverURL,r=e.cohortId,o=e.authorization;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._serverURL=n,this._cohortId=r,this._authorization=o}var n,r;return n=t,(r=[{key:"_checkRes",value:function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}},{key:"getCardInfo",value:function(){var t=this;return fetch("".concat(this._serverURL,"/v1/").concat(this._cohortId,"/cards"),{headers:{authorization:this._authorization}}).then((function(e){return t._checkRes(e)}))}},{key:"getUserData",value:function(){var t=this;return fetch("".concat(this._serverURL,"/v1/").concat(this._cohortId,"/users/me"),{headers:{authorization:this._authorization}}).then((function(e){return t._checkRes(e)}))}},{key:"updateUserInfo",value:function(t){var e=this,n=t.name,r=t.about;return fetch("".concat(this._serverURL,"/v1/").concat(this._cohortId,"/users/me"),{method:"PATCH",headers:{authorization:this._authorization,"Content-Type":"application/json"},body:JSON.stringify({name:n,about:r})}).then((function(t){return e._checkRes(t)}))}},{key:"updateUserAvatar",value:function(t){var e=this,n=t.avatar;return fetch("".concat(this._serverURL,"/v1/").concat(this._cohortId,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this._authorization,"Content-Type":"application/json"},body:JSON.stringify({avatar:n})}).then((function(t){return e._checkRes(t)}))}},{key:"addLike",value:function(t){var e=this;return fetch("".concat(this._serverURL,"/v1/").concat(this._cohortId,"/cards/").concat(t,"/likes"),{method:"PUT",headers:{authorization:this._authorization}}).then((function(t){return e._checkRes(t)}))}},{key:"deleteLike",value:function(t){var e=this;return fetch("".concat(this._serverURL,"/v1/").concat(this._cohortId,"/cards/").concat(t,"/likes"),{method:"DELETE",headers:{authorization:this._authorization}}).then((function(t){return e._checkRes(t)}))}},{key:"addCard",value:function(t){var e=this,n=t.name,r=t.link;return fetch("".concat(this._serverURL,"/v1/").concat(this._cohortId,"/cards"),{method:"POST",headers:{authorization:this._authorization,"Content-Type":"application/json"},body:JSON.stringify({name:n,link:r})}).then((function(t){return e._checkRes(t)}))}},{key:"deleteCard",value:function(t){var e=this;return fetch("".concat(this._serverURL,"/v1/").concat(this._cohortId,"/cards/").concat(t),{method:"DELETE",headers:{authorization:this._authorization}}).then((function(t){return e._checkRes(t)}))}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,e){if("object"!==r(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===r(i)?i:String(i)),o)}var i}var i=function(){function t(e,n,r,o,i,u){var a=o.handleCardClick,c=i.handleCardDelete,l=u.handleLikeCard;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=e.name,this._link=e.link,this._likes=e.likes,this._cardId=e._id,this._cardOwnerId=e.owner._id,this._userId=r,this._templateSelector=n,this._handleCardClick=a,this._handleCardDelete=c,this._handleLikeCard=l}var e,n;return e=t,(n=[{key:"_createCardElement",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".element").cloneNode(!0)}},{key:"_toggleDeleteButton",value:function(){return this._cardOwnerId===this._userId?this._deleteButton.classList.add("element__delete-btn_active"):this._deleteButton.classList.remove("element__delete-btn_active"),this._deleteButton}},{key:"_toggleLikeButton",value:function(){var t=this;this._likes.forEach((function(e){e._id===t._userId&&t._likeButton.classList.toggle("element__like-active")}))}},{key:"likeCard",value:function(t){this._likeButton.classList.toggle("element__like-active"),this._cardLikes.textContent=t.length}},{key:"createCard",value:function(){return this._element=this._createCardElement(),this._cardImage=this._element.querySelector(".element__image"),this._cardTitle=this._element.querySelector(".element__title"),this._likeButton=this._element.querySelector(".element__like"),this._cardLikes=this._element.querySelector(".element__like-count"),this._deleteButton=this._element.querySelector(".element__delete-btn"),this._cardImage.src=this._link,this._cardImage.alt=this._name,this._cardTitle.textContent=this._name,this._cardLikes.textContent=this._likes.length,this._toggleLikeButton(),this._setEventListeners(),this._element}},{key:"_setEventListeners",value:function(){var t=this;this._cardImage.addEventListener("click",(function(){return t._handleCardClick()})),this._likeButton.addEventListener("click",(function(){t._handleLikeCard(t._likeButton)})),this._toggleDeleteButton().addEventListener("click",(function(){t._handleCardDelete()}))}},{key:"deleteCard",value:function(){this._element.remove(),this._element=null}}])&&o(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==u(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==u(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===u(o)?o:String(o)),r)}var o}var c=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._inactiveButtonClass=e.inactiveButtonClass,this._inputErrorClass=e.inputErrorClass,this._errorClass=e.errorClass,this._form=n}var e,n;return e=t,(n=[{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(t){return!t.validity.valid}))}},{key:"disableButton",value:function(t){t.classList.add(this._inactiveButtonClass),t.disabled=!0}},{key:"enableButton",value:function(t){t.classList.remove(this._inactiveButtonClass),t.disabled=!1}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?this.disableButton(this._buttonElement):this.enableButton(this._buttonElement)}},{key:"_hideInputError",value:function(t){var e=this._form.querySelector("#".concat(t.id,"-error"));t.classList.remove(this._inputErrorClass),e.classList.remove(this._errorClass),e.textContent=""}},{key:"resetValidation",value:function(){var t=this;this._inputList.forEach((function(e){t._hideInputError(e)}))}},{key:"_checkInputValidity",value:function(t){t.validity.valid?this._hideInputError(t):this._showInputError(t,t.validationMessage)}},{key:"_showInputError",value:function(t,e){var n=this._form.querySelector("#".concat(t.id,"-error"));t.classList.add(this._inputErrorClass),n.textContent=e,n.classList.add(this._errorClass)}},{key:"_setEventListeners",value:function(){var t=this;this._inputList=Array.from(this._form.querySelectorAll(this._inputSelector)),this._buttonElement=this._form.querySelector(this._submitButtonSelector),this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._checkInputValidity(e),t._toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._form.addEventListener("submit",(function(t){t.preventDefault()})),this._setEventListeners()}}])&&a(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==l(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===l(o)?o:String(o)),r)}var o}var f=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popupElement=e,this._closeBtn=this._popupElement.querySelector(".popup__close-btn"),this._handleEscClose=this._handleEscClose.bind(this)}var e,n;return e=t,(n=[{key:"open",value:function(){this._popupElement.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popupElement.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}},{key:"setEventListeners",value:function(){var t=this;this._closeBtn.addEventListener("click",(function(){t.close()})),this._popupElement.addEventListener("click",(function(e){(e.target.classList.contains("popup_opened")||e.target.classList.contains("popup__close-btn"))&&t.close()}))}}])&&s(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function p(t){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}function y(t,e){return y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},y(t,e)}function h(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function d(){return d="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=m(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},d.apply(this,arguments)}function m(t){return m=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},m(t)}function v(t){var e=function(t,e){if("object"!==p(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==p(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===p(e)?e:String(e)}var _=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&y(t,e)}(i,t);var e,n,r,o=(n=i,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=m(n);if(r){var o=m(this).constructor;t=Reflect.construct(e,arguments,o)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===p(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return h(t)}(this,t)});function i(t){var e,n,r,u,a;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),r=h(n=o.call(this,t)),a=function(t,r){d((e=h(n),m(i.prototype)),"open",e).call(e),n._popupImage.src=r,n._popupImage.alt=t,n._popupAboutImage.textContent=t},(u=v(u="open"))in r?Object.defineProperty(r,u,{value:a,enumerable:!0,configurable:!0,writable:!0}):r[u]=a,n._popupImage=n._popupElement.querySelector(".popup__zoom-image"),n._popupAboutImage=n._popupElement.querySelector(".popup__zoom-title"),n}return e=i,Object.defineProperty(e,"prototype",{writable:!1}),e}(f);function b(t){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(t)}function S(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==b(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==b(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===b(o)?o:String(o)),r)}var o}function g(){return g="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=w(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},g.apply(this,arguments)}function k(t,e){return k=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},k(t,e)}function w(t){return w=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},w(t)}var E=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&k(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=w(r);if(o){var n=w(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===b(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n,r=e.handleFormSubmit;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._handleFormSubmit=r,n._formElement=n._popupElement.querySelector(".popup__form"),n._inputList=n._formElement.querySelectorAll(".popup__input"),n.submitButton=n._formElement.querySelector(".popup__submit-btn"),n}return e=u,(n=[{key:"close",value:function(){g(w(u.prototype),"close",this).call(this),this._formElement.reset()}},{key:"_getInputValues",value:function(){var t=this;return this._inputValuesObjects={},this._inputList.forEach((function(e){return t._inputValuesObjects[e.name]=e.value})),this._inputValuesObjects}},{key:"setInputValues",value:function(t){this._inputList.forEach((function(e){return e.value=t[e.name]}))}},{key:"setEventListeners",value:function(){var t=this;g(w(u.prototype),"setEventListeners",this).call(this),this._formElement.addEventListener("submit",(function(e){e.preventDefault(),t._handleFormSubmit(t._getInputValues()),t.close()}))}}])&&S(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(f);function j(t){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},j(t)}function O(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==j(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==j(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===j(o)?o:String(o)),r)}var o}function C(t,e){return C=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},C(t,e)}function L(t){return L=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},L(t)}var I=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&C(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=L(r);if(o){var n=L(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===j(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._confirmButton=e._popupElement.querySelector(".popup__submit-btn"),e}return e=u,(n=[{key:"setHandleSubmit",value:function(t){var e=this;this._confirmFunction=t,this._confirmButton.addEventListener("click",(function(){e._confirmFunction()}))}}])&&O(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(f);function P(t){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},P(t)}function R(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==P(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==P(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===P(o)?o:String(o)),r)}var o}var B=function(){function t(e,n){var r=e.items,o=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderedItems=r,this._renderer=o,this._container=document.querySelector(n)}var e,n;return e=t,(n=[{key:"addItemPrepend",value:function(t){this._container.prepend(t)}},{key:"addItemAppend",value:function(t){this._container.append(t)}},{key:"renderItems",value:function(){var t=this;this._renderedItems.forEach((function(e){t._renderer(e)}))}}])&&R(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function q(t){return q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},q(t)}function T(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==q(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==q(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===q(o)?o:String(o)),r)}var o}var U=function(){function t(e){var n=e.name,r=e.description,o=e.avatar;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=n,this._description=r,this._avatar=o}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return this._userInfo={username:this._name.textContent,description:this._description.textContent},this._userInfo}},{key:"setUserInfo",value:function(t){this._name.textContent=t.name,this._description.textContent=t.about,this._avatar.style.backgroundImage="url(".concat(t.avatar,")")}},{key:"userID",value:function(){return this._myID="1b47399c81720c1131b3bde1",this._myID}}])&&T(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}(),z=document.querySelector(".profile"),D=z.querySelector(".profile__user"),x=z.querySelector(".profile__about-user"),A=document.querySelector(".profile__avatar"),V=document.forms.avatarProfile,F=document.querySelector(".profile__avatar-btn"),H=document.querySelector(".popup_type_avatar"),N=V.querySelector(".popup__submit-btn"),J=z.querySelector(".profile__edit"),M=document.querySelector(".popup-profile"),$=document.querySelector(".popup__form-profile"),G=document.querySelector(".popup__submit-btn"),K=document.querySelector(".popup_type_delete"),Q=document.querySelector(".profile__add-button"),W=document.querySelector(".popup-cards"),X=document.querySelector(".popup__form-cards"),Y=document.querySelector(".popup__create-btn"),Z=document.querySelector(".popup-zoom-cards"),tt=".elements",et={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__submit-btn",inactiveButtonClass:"popup__submit-btn_disable",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},nt="Сохранить",rt="Сохранение...";function ot(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var it=new c(et,$),ut=new c(et,X),at=new c(et,V),ct=new n({serverURL:"https://nomoreparties.co",cohortId:"cohort-69",authorization:"67409028-f742-4343-b323-996ffba295cb"});function lt(t,e){t.textContent=e}function st(t,e){var n=new i(t,"#template",e,{handleCardClick:function(){pt.open(t.name,t.link)}},{handleCardDelete:function(){ht.open(),ht.setHandleSubmit((function(){ct.deleteCard(t._id).then((function(){n.deleteCard(),ht.close()})).catch((function(t){console.log(t)}))}))}},{handleLikeCard:function(e){return e.classList.contains("element__like-active")?ct.deleteLike(t._id).then((function(t){n.likeCard(t.likes)})).catch((function(t){console.log(t)})):ct.addLike(t._id).then((function(t){n.likeCard(t.likes)})).catch((function(t){console.log(t)}))}});return n.createCard()}Promise.all([ct.getUserData(),ct.getCardInfo()]).then((function(t){var e,n,r=(n=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,u,a=[],c=!0,l=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(a.push(r.value),a.length!==e);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(e,n)||function(t,e){if(t){if("string"==typeof t)return ot(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ot(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];dt.setUserInfo(o);var u=new B({items:i,renderer:function(t){u.addItemAppend(st(t,dt.userID()))}},tt);u.renderItems()})).catch((function(t){console.log(t)}));var ft=new B({items:[],renderer:function(t){return ft.addItemPrepend(st(t,id))}},tt),pt=new _(Z),yt=new E(W,{handleFormSubmit:function(t){lt(Y,"Создание..."),ct.addCard({name:t.imagename,link:t.url}).then((function(t){ft.addItemPrepend(st(t,dt.userID())),yt.close()})).catch((function(t){console.log(t)})).finally((function(){lt(Y,"Создать")}))}}),ht=new I(K);Q.addEventListener("click",(function(){ut.resetValidation(),ut.disableButton(Y),yt.open()}));var dt=new U({name:D,description:x,avatar:A}),mt=new E(M,{handleFormSubmit:function(t){lt(G,rt),ct.updateUserInfo({name:t.username,about:t.description}).then((function(t){dt.setUserInfo(t),mt.close()})).catch((function(t){console.log(t)})).finally((function(){lt(G,nt)}))}}),vt=new E(H,{handleFormSubmit:function(t){lt(N,rt),ct.updateUserAvatar({avatar:t.userAvatar}).then((function(t){dt.setUserInfo(t),vt.close()})).catch((function(t){console.log(t)})).finally((function(){lt(N,nt)}))}});F.addEventListener("click",(function(){at.resetValidation(),at.disableButton(N),vt.open()})),J.addEventListener("click",(function(){it.resetValidation(),mt.setInputValues(dt.getUserInfo()),it.enableButton(G),mt.open()})),it.enableValidation(),ut.enableValidation(),at.enableValidation(),yt.setEventListeners(),mt.setEventListeners(),vt.setEventListeners(),pt.setEventListeners(),ht.setEventListeners(),ft.renderItems()})();