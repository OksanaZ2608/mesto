export default class UserInfo {
  constructor({ name, description }) {
    this._name = name;
    this._description = description;
  }

  getUserInfo() {
    this._userInfo = {
      username: this._name.textContent,
      description: this._description.textContent
    };
    return this._userInfo;

  }
  setUserInfo(data) {
    this._name.textContent = data.name;
    this._description.textContent = data.description;
  }
}