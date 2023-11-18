// join(__dirname, './node_modules/@ant-design/pro-table')
import * as fs from 'fs';
import path from 'path';

const getProComponentPaths = () => {
  const result: string[] = [];

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

  return result;
};

export default getProComponentPaths;
