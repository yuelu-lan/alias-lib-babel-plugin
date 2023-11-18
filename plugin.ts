/**
 * 项目级 Umi 插件
 * 当处理 node_modules 内的包时，也需要配置 extraBabelIncludes
 * @link https://umijs.org/docs/guides/directory-structure#plugints
 */

import { PluginPass, Visitor } from '@babel/core';
import type { IApi } from '@umijs/max';
import getProComponentPaths from './getProComponentPaths';

interface IPluginOptionsType {
  /**
   * 需要处理的包
   */
  libraryNames?: string[];
  aliasMap?: Record<string, string>;
}

const iPluginOptions: IPluginOptionsType = {
  libraryNames: ['@ant-design/pro-components', ...getProComponentPaths()],
  aliasMap: { antd: 'antd-v5' },
};

export default (api: IApi) => {
  /**
   * 先于 .umirc.ts 中配置的 extraBabelPlugins 执行
   */
  api.addExtraBabelPlugins(() => {
    const visitor: Visitor<
      PluginPass & {
        opts?: IPluginOptionsType;
        filename?: string;
      }
    > = {
      ImportDeclaration(path, state) {
        const { filename = '' } = state;

        const { libraryNames, aliasMap } = iPluginOptions;

        if (!libraryNames || !aliasMap) {
          return;
        }

        if (!libraryNames.some((item) => filename.includes(item))) {
          return;
        }

        /**
         * import 的路径
         */
        const importPath = path.node.source.value;
        /**
         * import 包的 name
         */
        const libraryName = importPath.split('/')[0];

        if (!aliasMap[libraryName]) {
          return;
        }

        path.node.source.value = importPath.replace(
          libraryName,
          aliasMap[libraryName],
        );
      },
    };

    return {
      visitor,
    };
  });
};
