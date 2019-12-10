import React, { Component } from 'react';
import { CSSTransition } from "react-transition-group";
import { Contanier, InputContanier, MenuContanier, DivContanier, UlContanier } from "./style";

class Menu extends Component {
  render () {
    const { isMenuOpen, secondMenu, theme, MeunIndex } = this.props;
    return (
      <CSSTransition
        in={isMenuOpen}
        timeout={600}
        classNames="fade"
        unmountOnExiton
      >
        <Contanier theme={theme}>
          <InputContanier theme={theme}></InputContanier>
          <MenuContanier theme={theme}>
            {
              secondMenu[MeunIndex].map((item) => {
                return (
                  <DivContanier key={item.id} theme={theme}>
                    <p>{item.title}</p>
                    <UlContanier theme={theme}>
                      {
                        item.chilren.map((element) => {
                          return (<li key={element.id}>
                            <span>{element.icon}</span><span>{element.title}</span>
                            <span>✰</span>
                          </li>)
                        })
                      }
                    </UlContanier>
                  </DivContanier>)
              })
            }
          </MenuContanier>
        </Contanier>
      </CSSTransition>
    );
  }
}

export default Menu;