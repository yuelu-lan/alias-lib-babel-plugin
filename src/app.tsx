import IconContext from '@ant-design/icons/lib/components/Context';
import { RuntimeConfig } from '@umijs/max';
import { ConfigProvider } from 'antd';

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

const myIconContext = { prefixCls: 'IconContext-icon' };

export const rootContainer: RuntimeConfig['rootContainer'] = (container) => {
  return (
    <ConfigProvider
      componentSize="middle"
      prefixCls="ConfigProvider-antd"
      iconPrefixCls="ConfigProvider-icon"
    >
      <IconContext.Provider value={myIconContext}>
        {container}
      </IconContext.Provider>
    </ConfigProvider>
  );
};
