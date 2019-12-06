import React, { Component } from 'react';
import { Contanier, NavItem } from "./style"


class Nav extends Component {
  render () {
    const { isNavOpen, navMenu, navActive, theme } = this.props;
    return (
      <Contanier className={isNavOpen ? "open" : ""} theme={theme} >
        {
          Object.keys(navMenu).map(item => <NavItem theme={theme} onMouseEnter={this.changeNavItem.bind(this, navMenu[item])} key={navMenu[item].id} className={navActive === navMenu[item].id ? "active" : ""}>{navMenu[item].icon}</NavItem>)
        }

      </Contanier>
    );
  }
  changeNavItem = (item) => {
    const { changeNavItem, changeMeun, isMenuOpen } = this.props
    changeNavItem(item.id)
    if (!isMenuOpen) {
      changeMeun(true)
    }

  }
}

export default Nav