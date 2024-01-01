import { RuntimeConfig } from '@umijs/max';
import { ConfigProvider as ConfigProviderV5 } from 'antd-v5';

// 运行时配置

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<{ name: string }> {
  return { name: '@umijs/max' };
}

export const layout: RuntimeConfig['layout'] = () => {
  return {
    logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
    menu: {
      locale: false,
    },
  };
};

export const rootContainer: RuntimeConfig['rootContainer'] = (container) => {
  return (
    <ConfigProviderV5
      componentSize="middle"
      // 样式前缀和 icon 前缀都需要配置，不然 antd2 和 antd5 样式会冲突
      prefixCls="ConfigProvider-antd"
      iconPrefixCls="ConfigProvider-icon"
    >
      {container}
    </ConfigProviderV5>
  );
};

'test';
