import React from "react"
import Loadable from 'react-loadable';
import { Route } from "react-router-dom";
import Loading from "./Loading"

export const LoadableComponentFunc = (component) => {
  return Loadable({
    loader: () => import(`../../page/${component.toLowerCase()}/${component}`),
    loading: Loading
  })
}

export const createRoute = (routes) => {
  return routes.map(item => <Route {...item}></Route>)
}




