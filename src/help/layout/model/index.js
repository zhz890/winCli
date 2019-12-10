import lugiax from "@lugia/lugiax";
import async from "../control/async";
import sync from "../control/sync";
import { theme } from "../constant";
const Model = lugiax.register({
  model: 'layout',
  state: {
    theme,
    roles: {},
    token: "",
    navMenu: {
      1: {
        id: 1,
        path: "/a",
        icon: "❤",
        title: "系统管理"
      },
      2: {
        id: 2,
        path: "/b",
        icon: "✿",
        title: "菜单管理"
      }
    },
    secondMenu: [
      [{
        id: 0,
        title: "测试数据",
        chilren: [
          {
            id: 21,
            icon: "❀",
            title: "指令",
            path: "/"

          },
          {
            id: 21,
            icon: "❀",
            title: "指令",
            path: "/"

          },
          {
            id: 21,
            icon: "❀",
            title: "指令",
            path: "/"

          },
          {
            id: 21,
            icon: "❀",
            title: "指令",
            path: "/"

          },
          {
            id: 21,
            icon: "❀",
            title: "指令",
            path: "/"

          },
          {
            id: 21,
            icon: "❀",
            title: "指令",
            path: "/"

          }
        ]
      },
      {
        id: 1,
        title: "测试数据",
        chilren: [
          {
            id: 21,
            icon: "❀",
            title: "指令",
            path: "/"

          },
          {
            id: 21,
            icon: "❀",
            title: "指令",
            path: "/"

          },
          {
            id: 21,
            icon: "❀",
            title: "指令",
            path: "/"

          },
          {
            id: 21,
            icon: "❀",
            title: "指令",
            path: "/"

          },
          {
            id: 21,
            icon: "❀",
            title: "指令",
            path: "/"

          },
          {
            id: 21,
            icon: "❀",
            title: "指令",
            path: "/"

          }
        ]
      }],
      [{
        id: 0,
        title: "测试数据",
        chilren: [
          {
            id: 21,
            icon: "❀",
            title: "指令",
            path: "/"

          },
          {
            id: 21,
            icon: "❀",
            title: "指令",
            path: "/"

          },
          {
            id: 21,
            icon: "❀",
            title: "指令",
            path: "/"

          },
          {
            id: 21,
            icon: "❀",
            title: "指令",
            path: "/"

          },
          {
            id: 21,
            icon: "❀",
            title: "指令",
            path: "/"

          },
          {
            id: 21,
            icon: "❀",
            title: "指令",
            path: "/"

          }
        ]
      }
      ]

    ],
    isNavOpen: false,
    isMenuOpen: false,
    isNavsTransfromEnd: true,
    navActive: 0,
    MeunIndex: 0
  },


  mutations: {
    sync,
    async
  }
});


export default Model
