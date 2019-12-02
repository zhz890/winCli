import lugiax from "@lugia/lugiax";
import async from "./async"
import sync from "./sync"
const InputModel = lugiax.register({
  model: 'form',
  state: {
    name: "请输入姓名",
    address: "请输入地址",
    age: "请输入年纪",
    type: {
      value: ['lugia-E'],
      displayValue: ['皮卡丘']
    }
  },
  mutations: {
    sync,
    async
  }
});


export default InputModel
