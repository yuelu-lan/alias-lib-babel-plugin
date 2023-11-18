import IconContext from '@ant-design/icons/lib/components/Context';
import { RuntimeConfig } from '@umijs/max';
import { ConfigProvider as ConfigProviderV5 } from 'antd';
import { ConfigProvider as ConfigProviderV4 } from 'antd-v4';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import 'antd-v4/dist/antd.css';
import zhCN from 'antd-v4/es/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';

moment.locale('zh-cn');

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
    <ConfigProviderV5
      componentSize="middle"
      prefixCls="ConfigProvider-antd"
      iconPrefixCls="ConfigProvider-icon"
    >
      <ConfigProviderV4 locale={zhCN}>
        <IconContext.Provider value={myIconContext}>
          {container}
        </IconContext.Provider>
      </ConfigProviderV4>
    </ConfigProviderV5>
  );
};
