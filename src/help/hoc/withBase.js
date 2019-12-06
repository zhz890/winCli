import React, { Component } from "react";
import { connect } from "@lugia/lugiax";
import path from "path"
const withBase = (Components, file) => {
  class RoleControl extends Component {
    render () {
      return (<Components {...this.props} />)
    }
  }
  return connect(
    require(`../${file}/model/index`).default,
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