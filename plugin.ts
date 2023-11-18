/**
 * 项目级 Umi 插件
 * 当处理 node_modules 内的包时，也需要配置 extraBabelIncludes
 * @link https://umijs.org/docs/guides/directory-structure#plugints
 */

import { PluginPass, Visitor } from '@babel/core';
import type { IApi } from '@umijs/max';

interface IPluginOptions {
  libraryName?: string[];
}

export default (api: IApi) => {
  api.addExtraBabelPlugins(() => {
    const visitor: Visitor<
      PluginPass & {
        opts?: IPluginOptions;
        filename?: string;
      }
    > = {
      ImportDeclaration(path, state) {
        const { filename, opts } = state;
        if (
          (opts?.libraryName || ['antd']).some((item) =>
            (filename || '').includes(item),
          )
        ) {
          console.log('umi-plugins --------------------------');
          console.log(filename, 'filename');
        }
      },
    };

    return {
      visitor,
    };
  });
};
