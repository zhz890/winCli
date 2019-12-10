import React, { Component } from 'react';
import { MainContanier } from "./style";

class Main extends Component {
  render () {
    const { theme } = this.props
    // console.log(theme)
    return (
      <MainContanier theme={theme}>
        {this.props.children}
      </MainContanier>
    );
  }
}

export default Main