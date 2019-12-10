import React, { Component } from 'react';
import { Contanier, LogoItem, UserWrapper, UserImg, IconContanier, UserInfo, UserInfoItem, UserName } from "./style";

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
          <UserName>超级管理员 <span className="icon">▼</span></UserName>
          {/* <UserInfo>
            <UserInfoItem>退出</UserInfoItem>
          </UserInfo> */}
        </UserWrapper>
      </Contanier>
    );
  }

  changeNav = () => {
    const { isNavOpen, isMenuOpen, changeMeun, changeNav, isNavsTransfromEnd } = this.props;
    if (isNavsTransfromEnd) {
      changeNav(!isNavOpen)
    }
    if (isMenuOpen) {
      changeMeun(false)
    }

  }
}

export default Header