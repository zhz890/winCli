
let routesDefault = []
const files = require.context('../page', true, /index.js$/);
files.keys().forEach(key => {
  let path = key.split(".")[1];
  let routePath = `/${path.split("/")[1]}`
  routesDefault = routesDefault.concat({ path: routePath, component: files(key).default, exact: true })
})

export default routesDefault

