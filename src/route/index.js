import Layout from "../help/layout/index";
import Login from "../help/login/index";
import NOFont from "../page/404/index"

const files = require.context('../page', true, /index.js$/);
export const childrenRouter = files.keys().map(key => {
  let path = key.split(".")[1];
  let routePath = `/layout/${path.split("/")[1]}`;
  return { path: routePath, component: files(key).default, exact: true, auth: true };

})

export const routes = [
  // {
  //   path: "/",
  //   component: Login,
  //   exact: true
  // },
  {
    path: "/layout",
    component: Layout,
  },
  {
    path: "/",
    component: Login,
    exact: true
  },
  {
    component: NOFont,
  }
]




