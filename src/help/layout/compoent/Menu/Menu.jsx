import React, { Component } from 'react';
import { Container, InputContanier, MenuContanier, DivContanier, UlContanier } from "./style"

class Menu extends Component {
  render () {
    const { isMenuOpen, secondMenu, theme } = this.props;
    return (
      <Container className={isMenuOpen ? "open" : ""} theme={theme}>
        <InputContanier theme={theme}></InputContanier>
        <MenuContanier theme={theme}>
          {
            secondMenu.map((item) => {
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

      </Container>
    );
  }
}

export default Menu;