import { fromJS } from "immutable";

export default {
  changeName (state, name) {
    return state.set("name", name)
  },
  changeAge (state, age) {
    return state.set("age", age)
  },
  changeAddress (state, address) {
    return state.set("address", address)
  },
  changeType (state, { newValue, newDisplayValue }) {
    return state.set("type", fromJS({
      value: [newValue],
      displayValue: [newDisplayValue]
    }))


  }
}