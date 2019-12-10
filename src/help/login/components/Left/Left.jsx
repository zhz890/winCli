import React, { Component } from 'react';
import { Contanier, Welcome, HrContanier, LogoContanier, Copy } from "./style"
import shhLogo from "../../../../assets/image/logo.png"
class Left extends Component {
  render () {
    return (
      <Contanier>
        <Welcome>Welcome</Welcome>
        <HrContanier>
        </HrContanier>
        <LogoContanier>
          <img src={shhLogo} width="33" height="35" />
          <span className="logo-text">赢时胜信息技术</span>
        </LogoContanier>
        <Copy>赢时胜信息技术股份有限公司</Copy>
      </Contanier>
    );
  }
}

export default Left