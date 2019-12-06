import React, { Component } from 'react';
import { routes } from "./route/index";
import { HashRouter, Switch, Route } from "react-router-dom";
class App extends Component {
  render () {
    return (
      <>
        <HashRouter>
          <Switch>
            {
              routes.map((item) => <Route path={item.path} component={item.component}></Route>)
            }
          </Switch>
        </HashRouter>
      </>
    )
  }
}




export default App
