import React, { Component } from 'react';
import route from "./route/index";
import { createRoute, Link } from "@lugia/lugiax-router"
import { Button } from "@lugia/lugia-web"
class App extends Component {
  render () {
    return (
      <>
        <Link to="/home" >
          <Button>测试表格页面路由</Button>
        </Link>
        <Link to="/list" >
          <Button>测试一般组件</Button>
        </Link>
        <Link to="/detail/1111" >
          <Button>测试页面权限与页面之间数据的传递</Button>
        </Link>
        {
          createRoute(route)
        }

      </>
    )
  }
}




export default App
