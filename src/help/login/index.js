import React, { Component } from 'react';
import Left from "./components/Left/Left";
import Right from "./components/Right/Right";
import { Contanier, LoginContanier, MaskContanier } from "./style";
import withBase from "../../help/hoc/withUserConfig"
class Login extends Component {
  render () {
    return (
      <Contanier>
        <MaskContanier>
        </MaskContanier>
        <LoginContanier>
          <Left></Left>
          <Right {...this.props}></Right>
        </LoginContanier>
      </Contanier>
    );
  }
}

export default withBase(Login)