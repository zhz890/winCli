import lugiax from "@lugia/lugiax";
import async from "../control/async.js"
import sync from "../control/sync.js"
const homeModel = lugiax.register({
  model: 'home',
  state: {
    name: 'userName',
    data: [
      {
        "name": "Jack",
        "age": 28,
        "address": "some where",
        "type": "xxx",
        "key": "1"
      },
      {
        "name": "Rose",
        "age": 36,
        "address": "some where",
        "type": "xxx",
        "key": "2"
      },
      {
        "name": "Uzi",
        "age": 36,
        "address": "some where",
        "type": "xxx",
        "key": "3"
      }
    ]
  },
  mutations: {
    sync,
    async
  }
});


export default homeModel
