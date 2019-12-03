import lugiax from "@lugia/lugiax";
import async from "../control/async";
import sync from "../control/sync"
const detailModel = lugiax.register({
  model: 'detail',
  state: {
    name: "请输入姓名",
    address: "请输入地址",
    age: "请输入年纪",
    roles: {
      add: true,
      deletes: true,
      see: true,
    },
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


export default detailModel
