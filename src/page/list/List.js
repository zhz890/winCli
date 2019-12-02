import React, { Component } from 'react';
import { withRouter } from "react-router-dom"
class List extends Component {
  render () {
    const { match: { params: { id } } } = this.props
    return (
      <div>
        List
      </div>
    );
  }
}

export default withRouter(List);