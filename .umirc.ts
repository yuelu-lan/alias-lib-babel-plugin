import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {
    // configProvider: {
    //   iconPrefixCls: 'defineConfig-icon',
    // },
  },
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '@umijs/max',
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    {
      name: '权限演示',
      path: '/access',
      component: './Access',
    },
    {
      name: ' CRUD 示例',
      path: '/table',
      component: './Table',
    },
  ],
  npmClient: 'pnpm',
  extraBabelPlugins: [
    // [
    //   require.resolve('./scripts/function-babel-plugins.js'),
    //   { libraryName: ['@ant-design/pro-components', 'pro-table'] },
    // ],
  ],
  // // node_modules 内的包需要用这个声明，才会执行 extraBabelPlugins
  // extraBabelIncludes: ['@ant-design/pro-components', 'antd'],
});
