import React, { Component } from 'react';
import { Contanier, LoginTitle, LoginInfo, LoginContent } from "./style";
import withUserConfig from "../../../hoc/withUserConfig"

class Right extends Component {
  render () {
    return (
      <Contanier>
        <LoginTitle>账户密码登录</LoginTitle>
        <LoginInfo>
          <label></label>
          <span className="input-content">
            <input placeholder="用户名/用户编号"></input>
          </span>
        </LoginInfo>
        <LoginInfo>
          <label></label>
          <span className="input-content">
            <input placeholder="密码"></input>
          </span>
        </LoginInfo>
        <LoginInfo></LoginInfo>
        <LoginContent>
          <button className="button" onClick={this.login}>登陆</button>
        </LoginContent>
      </Contanier>
    );
  }
  login = () => {
    /**伪代码登陆验证**/
    /**登陆验证成功后**/
    const { asyncHttpUserConfig } = this.props;
    /**登陆成功****/
    asyncHttpUserConfig();
    //1>后台返回tonken将存放到公共的lugiax里面，
    //2>将该用户的主题存入到公共的lugiax -theme里面，
    //3>进行跳转到首页

    this.props.history.push({
      pathname: '/layout/home',
    })
  }
}

export default withUserConfig(Right)