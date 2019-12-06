import React, { Component } from 'react';
import { Contanier } from "./style";



class Footer extends Component {
  render () {
    let { theme } = this.props;
    return (
      <Contanier theme={theme}>
        交易日期 ：2019年12月5日
      </Contanier>
    );
  }
}

export default Footer;