export default {
  changeNav (state, value) {
    return state.set("isNavOpen", value)
  },
  changeNavItem (state, id) {
    return state.set("navActive", id)
  },
  changeMeun (state, value) {
    return state.set("isMenuOpen", value)
  }
}


