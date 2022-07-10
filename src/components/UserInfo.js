export default class UserInfo{
  constructor(nameSelector, descriptionSelector, avatarSelector) {
     this._name = document.querySelector(nameSelector);
     this._job = document.querySelector(descriptionSelector);
     this._avatar = document.querySelector(avatarSelector);
  }
  
  getUserInfo() {
     const info = {
        name: this._name.textContent,
        job: this._job.textContent
     };
     return info;
  }

  setUserInfo(name, description, avatar, id) {
     this._name.textContent = name;
     this._job.textContent = description;
     this._avatar.src = avatar;
     if (id) {
        this.id = id;
     }
  }
}