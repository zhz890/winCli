import React from 'react';
import Layout from "../help/layout/index";
import Detail from "../page/detail/index";
import Home from "../page/home/index";

import { Route } from "react-router-dom";
export const routes = [
  {
    path: "/",
    component: Layout,
  }
]



export const childrenRouter = [
  <Route path="/home" component={Home} exact></Route>,
  <Route path="/detail" component={Detail} exact></Route>
]

