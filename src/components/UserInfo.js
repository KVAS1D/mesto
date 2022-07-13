export default class UserInfo{
   constructor(data) {
      this.name = document.querySelector(data.name);
      this.description = document.querySelector(data.description);
      this.avatar = document.querySelector(data.avatar);
   }
   
   getUserInfo() {
      const info = {
         name: this.name.textContent,
         description: this.description.textContent
      };
      return info;
   }

   setUserInfo(name, description, avatar, id) {
      this.name.textContent = name;
      this.description.textContent = description;
      this.avatar.src = avatar;
      if (id) {
         this.id = id;
      }
   }
}