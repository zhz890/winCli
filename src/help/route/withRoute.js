import React from "react"
import Loadable from 'react-loadable';
import Loading from "./Loading";
import path from "path"

export const LoadableComponentFunc = (component) => {
  let s = path.resolve(__dirname, component);
  console.log(s)
  return Loadable({
    // loader: () => import(`../../page/${component.toLowerCase()}/${component}`),
    loader: () => import(`${s}`),
    loading: Loading
  })
}





