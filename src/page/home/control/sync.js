// 同步操作方法 

import { fromJS } from "immutable";

export default {
  deleteRow (state, { list, index }) {
    let newData = state.get("data").splice(index, 1);
    return state.merge({
      "name": index,
      "data": newData
    })
  },
  addTableRow (state, ...arg) {
    let params = Object.keys(arg[0]).reduce((pre, cur) => {
      pre[cur] = arg[0][cur]
      return pre
    }, {})
    console.log(params)
    return state.merge({
      "data": fromJS([...state.get("data"), fromJS(params)])
    })
  },
}



