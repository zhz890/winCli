/****/

class Menu {
  constructor() {
    this.roles = []
  }
  login () {
    // this.userToken = localStorage.get("___user_token__");
    this.userToken = "qq";

  }
  //初始化菜单
  initMenu () {

  }
  //初始化列表
  initList () {

  }


}

Menu.getInstance = (function () {
  let instance;
  return function () {
    if (!instance) {
      instance = new Menu()
    }
    return instance
  }
})()

let menuObject = Menu.getInstance();


export default menuObject