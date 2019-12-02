import React, { Fragment, Component } from 'react';
import route from "./route/index";
import { HashRouter, Link } from "react-router-dom"
import { createRoute } from "./help/route/withRoute";
class App extends Component {
  render () {
    return (
      <Fragment>
        <HashRouter>
          <Link to="/home" >Home</Link>
          <Link to="/list" >List</Link>
          <Link to="/detail" >detail</Link>
          {
            createRoute(route)
          }
        </HashRouter>

      </Fragment>
    )
  }
}




export default App
