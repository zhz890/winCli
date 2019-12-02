const proxy = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    proxy("/basea/**", {
      target: "https://gitee.com/api/v5/gists?page=1&per_page=20",
      changeOrigin: true
    })
  );
  // app.use(
  //   proxy("/api/**", {
  //     target: "https://gitee.com/api/v5/gists?page=1&per_page=20",
  //     changeOrigin: true
  //   })
  // );
}; 