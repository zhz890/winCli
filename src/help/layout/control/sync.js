export default {
  changeNav (state, value) {
    return state.set("isNavOpen", value)
  },
  changeNavItem (state, id) {
    return state.set("navActive", id)
  },
  changeMeun (state, value) {
    return state.set("isMenuOpen", value)
  },

  changeNavsTransfromEnd (state, sas) {
    return state.set("isNavsTransfromEnd", sas)
  },
  changeToken (state, value) {
    return state.set("token", value)
  }
}


