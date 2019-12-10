import React, { Component } from 'react';
import { connect } from "@lugia/lugiax";
import Header from "./compoent/Header/Header";
import Side from "./compoent/Side/Side";
import Nav from "./compoent/Nav/Nav"
import Menu from "./compoent/Menu/Menu";
import Main from "./compoent/Main/Main";
import Mask from "./compoent/Mask/Mask"
import Footer from "./compoent/Footer/Footer";
import { HashRouter, Switch } from "react-router-dom";
import { Contanier, Wrapper } from "./compoent/style";
import { childrenRouter } from "../../route/index";
import layoutModel from "./model/index";
import TargetRoute from "../hoc/FrontendAuth ";
import user from "../hoc/createUser"

class Layout extends Component {
  render () {
    const { theme, isNavOpen } = this.props;
    return (
      <>
        <Contanier theme={theme}>
          <Header {...this.props}></Header>
          <Wrapper theme={theme}>
            <Menu {...this.props}></Menu>
            <Side  {...this.props}></Side>
            <Nav {...this.props}></Nav>
            <Main {...this.props}>
              <HashRouter>
                <Switch>
                  {
                    <TargetRoute config={childrenRouter} {...this.props}></TargetRoute>
                  }
                </Switch>
              </HashRouter>
            </Main>
            {
              isNavOpen ? <Mask {...this.props} ></Mask> : ""
            }

          </Wrapper>
          <Footer {...this.props}></Footer>
        </Contanier>
      </>
    );
  }

}

export default connect(
  layoutModel,
  state => {
    let stateJs = state.toJS();
    return Object.keys(stateJs).reduce((pre, cur) => {
      pre[cur] = stateJs[cur]
      return pre
    }, {})
  },
  mutations => {
    return Object.keys(mutations).reduce((pre, cur) => {
      pre[cur] = mutations[cur];
      return pre
    }, {})
  }
)(Layout)