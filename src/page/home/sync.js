import { fromJS } from "immutable";

export default {
  deleteRow (state, { list, index }) { // 一个同步操作} // Function
    let newData = state.get("data").splice(index, 1)
    return state.set("name", index).set("data", fromJS(newData))
  },
  addTableRow (state, ...arg) {
    let params = Object.keys(arg[0]).reduce((pre, cur) => {
      pre[cur] = arg[0][cur]
      return pre
    }, {})
    return state.merge({
      "data": fromJS([...state.get("data"), fromJS(params)])
    })
  },
}



