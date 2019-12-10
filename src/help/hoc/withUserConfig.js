import React, { Component } from "react";
import { connect } from "@lugia/lugiax";
const withBase = (Components, file) => {
  class RoleControl extends Component {
    render () {
      return (<Components {...this.props} />)
    }

  }
  return connect(
    require("../layout/model/index").default,
    state => {
      let statejs = state.toJS()
      return Object.keys(statejs).reduce((pre, cur) => {
        pre[cur] = statejs[cur];
        return pre
      }, {})
    },
    mutations => {
      return Object.keys(mutations).reduce((pre, cur) => {
        pre[cur] = mutations[cur];
        return pre
      }, {})
    }
  )(RoleControl)
}
export default withBase