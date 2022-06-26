export default class UserInfo {
  constructor(data) {
    this.name = document.querySelector(data.name);
    this.description = document.querySelector(data.description);

  }

  getUserInfo() {
    return {
      name: this.name.textContent,
      description: this.description.textContent,
    };
  }

  setUserInfo(name, descr) {
    this.name.textContent = name;
    this.description.textContent = descr;
  }
}
