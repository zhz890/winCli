import React, { Component } from 'react';
import { CSSTransition } from "react-transition-group";
import { Contanier } from "./style";
class BaseSide extends Component {
  render () {
    const { isNavOpen, theme, time } = this.props;
    return (
      <CSSTransition
        in={isNavOpen}
        timeout={600}
        classNames="fade"
        unmountOnExiton
        onEnter={(el) => { this.transformEnd(el, false) }}
        onEntered={(el) => { this.transformEnd(el, true) }}
      >
        <Contanier {...this.props}>
          {this.props.children}
        </Contanier>
      </CSSTransition>
    );
  }
  transformEnd = (el, value) => {
    const { changeNavsTransfromEnd } = this.props;
    changeNavsTransfromEnd(value);

  }
}

export default BaseSide
