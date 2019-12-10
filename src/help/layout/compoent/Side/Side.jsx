import React, { Component } from 'react';
import classNames from "classnames";
import { Contanier, NavItem } from "./style";

import BaseSide from "../BaseFade/BaseFade"

class Side extends Component {
  render () {
    const { navMenu, navActive, theme } = this.props;
    return (
      <BaseSide {...this.props}>
        <Contanier theme={theme}>
          {
            Object.keys(navMenu).map(item => {
              let classNameed = classNames({
                "active": navActive === navMenu[item].id
              })
              return (<NavItem theme={theme}
                onMouseEnter={this.changeNavItem.bind(this, navMenu[item])}
                key={navMenu[item].id} className={classNameed}>
                {navMenu[item].icon}</NavItem>)
            }

            )
          }

        </Contanier>
      </BaseSide>
    );
  }
  changeNavItem = (item) => {
    const { changeNavItem, changeMeun, isMenuOpen, isNavsTransfromEnd } = this.props
    changeNavItem(item.id)
    if (!isMenuOpen && isNavsTransfromEnd) {
      changeMeun(true)
    }

  }
}

export default Side