import React, { Component } from 'react';
import { Contanier, LogoItem, UserWrapper, UserImg, IconContanier } from "./style";

class Header extends Component {

  render () {
    const { theme } = this.props
    return (
      <Contanier theme={theme}>
        <div className="logoWrapper"><LogoItem onMouseEnter={this.changeNav}>☰</LogoItem><LogoItem>赢 · 投资</LogoItem></div>
        <UserWrapper theme={theme}>
          <IconContanier theme={theme}>☎</IconContanier>
          <UserImg theme={theme}>
          </UserImg>
          <span>超级管理员 ▼</span>
        </UserWrapper>
      </Contanier>
    );
  }

  changeNav = () => {
    const { isNavOpen, isMenuOpen, changeMeun, changeNav } = this.props
    changeNav(!isNavOpen)
    if (isMenuOpen) {
      changeMeun(false)
    }
  }
}

export default Header