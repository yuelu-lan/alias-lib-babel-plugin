import { defineConfig } from '@umijs/max';
import getProComponentPaths from './getProComponentPaths';

export default defineConfig({
  antd: {
    // configProvider: {
    //   iconPrefixCls: 'defineConfig-icon',
    // },
    /**
     * 这里不能配置 import: true,
     */
    import: false,
    style: 'css',
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
  // pnpm yarn 都不行
  npmClient: 'npm',
  // 开启后 extraBabelIncludes 失效
  mfsu: false,
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'antd',
        style: 'css', // `style: true` 会加载 less 文件
      },
    ],
  ],
  // node_modules 内的包需要用这个声明，才会执行 extraBabelPlugins
  extraBabelIncludes: ['@ant-design/pro-components', ...getProComponentPaths()],
});
