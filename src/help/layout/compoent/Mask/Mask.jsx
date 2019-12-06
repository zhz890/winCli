import React, { Component } from 'react';
import { Contanier } from "./style"



class Mask extends Component {
  render () {
    const { theme } = this.props
    return (
      <Contanier onClick={this.closeMark} theme={theme}>
      </Contanier>
    );
  }

  closeMark = () => {
    const { changeNav, changeMeun } = this.props
    changeNav(false)
    changeMeun(false)
  }

}

export default Mask