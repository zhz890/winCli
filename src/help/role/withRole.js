import React, { Component } from "react";
import { connect } from "@lugia/lugiax";
import detailModule from "../../page/detail/model/model"
const withRole = (Components) => {
  class RoleControl extends Component {
    constructor(props) {
      super(props);
      this.state = {}
    }
    render () {
      return (<div><Components {...this.props} roles={this.props.roles} /></div>)
    }
  }

  return connect(
    detailModule,
    state => {
      return {
        roles: state.get("roles")
      }
    }
  )(RoleControl)
}



export default withRole