export default class UserInfo {
  constructor(userSelectors) {
    this.name = document.querySelector(userSelectors.name);
    this.job = document.querySelector(userSelectors.job);

  }

  getUserInfo() {
    return {
      name: this.name.textContent,
      job: this.job.textContent,
    };
  }

  setUserInfo(name, descr) {
    this.name.textContent = name;
    this.job.textContent = descr;    
  }
}
