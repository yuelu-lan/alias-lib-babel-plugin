// join(__dirname, './node_modules/@ant-design/pro-table')
import * as fs from 'fs';
import path from 'path';

const getProComponentPaths = () => {
  const result: string[] = [];

  /**
   * TODO:
   * umi layout 依赖于 antd，这里先临时这么处理下，后面在看怎么搞
   */
  result.push(path.resolve('./src/.umi/plugin-layout'));

  try {
    fs.readdirSync(path.resolve('./node_modules/@ant-design')).forEach(
      (fileName) => {
        if (!fileName?.includes('pro')) {
          return;
        }

        /**
         * path.join(__dirname, './node_modules/@ant-design')
         * 等效于
         * path.resolve('./node_modules/@ant-design')
         *
         *
         * path.join 只是把接受的 paths 连接在一起
         * path.resolve 会把 '/' 当成根目录，
         * 并且，当接受的 paths 没有以 '/' 开头时，会返回一个带当前目录路径的绝对路径。
         */
        result.push(
          path.join(__dirname, `./node_modules/@ant-design/${fileName}`),
        );
      },
    );
  } catch (error) {
    console.error('getProComponentPaths error', error);
  }

  return result;
};

export default getProComponentPaths;
