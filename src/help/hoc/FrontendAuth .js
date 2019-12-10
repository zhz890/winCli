/**登陆路由权限判断 */

import React, { Component } from "react"
import { Route, Redirect } from 'react-router-dom';
export default class TargetRoute extends Component {
  render () {
    const { location, config, token } = this.props;
    const { pathname } = location;
    let isLogin = token;
    const targetRouterConfig = config.find((v) => v.path === pathname);
    // 这部分代码，是为了在非登陆状态下，访问不需要权限校验的路由
    if (targetRouterConfig && !targetRouterConfig.auth && !isLogin) {
      return <Route {...targetRouterConfig} />
    }
    if (isLogin) {
      //如果是登陆状态的时候，想要跳转到登陆，将重定向到"/"
      if (pathname == "/login") {
        return <Redirect to="/home" />
      } else {
        if (targetRouterConfig) {
          return <Route {...targetRouterConfig} />
        } else {
          // 如果路由不合法，
          return <Redirect to='/layout/404' />
        }
      }
    } else {
      // 非登陆状态下，当路由合法时且需要权限校验时，跳转到登陆页面，要求登陆
      if (targetRouterConfig && targetRouterConfig.auth) {
        // console.log(targetRouterConfig)
        return <Redirect to='/login' />
      } else {
        return <Redirect to='/login' />
        // return <Redirect to='/404' />
      }
    }
  }
}