const route = {
  '/home': {
    render: async () => import('../../src/page/home/'),
    exact: true,
    key: 1
  },
  '/detail/:id': {
    render: async () => import('../../src/page/detail/'),
    key: 2
  },
  '/list': {
    render: async () => import('../../src/page/list/'),
    key: 3
  },
};

export default route