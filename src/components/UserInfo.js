export default class UserInfo {
  constructor(data) {
    this.name = document.querySelector(data.name);
    this.job = document.querySelector(data.job);

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
