import React from 'react';
import { createBrowserHistory } from "history";
import { createApp, go, render } from "@lugia/lugiax-router";
import * as serviceWorker from './serviceWorker';
import "@lugia/lugia-web/dist/css/global.css";
import Main from './App';
const history = createBrowserHistory();


const App = createApp(
  {
    "/": {
      component: Main
    }
  },
  history,
  // {
  //   async onBeforeGo ({ url }) {
  //     if (url === "/nowPower") {
  //       await go({ url: "/404" });
  //       return false;
  //     }
  //     return url !== "/not";
  //   }
  // }
);

render(() => {
  return <App />;
}, "root");

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
