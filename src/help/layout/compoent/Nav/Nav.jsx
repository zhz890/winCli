import React, { Component } from 'react';
import classNames from "classnames";
import { NavItem, Contanier } from "./style";
import BaseSide from "../BaseFade/BaseFade"
class Nav extends Component {
  render () {
    const { navMenu, navActive, theme } = this.props;
    return (
      <BaseSide {...this.props} width="130px" left="70px" >
        <Contanier theme={theme}>
          {
            Object.keys(navMenu).map((item, index) => {
              let classNamesed = classNames({
                "active": navActive === navMenu[item].id
              })
              return (< NavItem theme={theme} onMouseEnter={this.changeNavItem.bind(this, navMenu[item])} key={navMenu[item].id}
                className={classNamesed}> {navMenu[item].title}</NavItem>)
            })
          }
        </Contanier>
      </BaseSide >
    );
  }
  changeNavItem = (item) => {
    const { changeNavItem, changeMeun, isMenuOpen, isNavsTransfromEnd } = this.props
    changeNavItem(item.id)
    if (!isMenuOpen && isNavsTransfromEnd) {
      changeMeun(true);
    }
  }
}

export default Nav
