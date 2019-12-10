import lugiax from "@lugia/lugiax";
import async from "../control/async.js";
import sync from "../control/sync.js";
const homeModel = lugiax.register({
  model: 'home',
  state: {
    test: "homeTest",
    data: []
  },
  mutations: {
    sync,
    async
  }
});


export default homeModel
