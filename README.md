# alias-lib-babel-plugin

解决类似 pro-components 依赖 antd，而 antd 却是通过别名安装时，导致 pro-components 报错的问题

## 主要文件

`./package.json`

`./umirc.ts`

`./plugin.ts`

`./getProComponentPaths.ts`

`./src/app.tsx`

## 分支

### antd5-to-antd4

antd5(主) & antd4(副) 共存

将 pro-components 默认引用的 antd5 指向 antd4

### antd2-to-antd5

antd2(主) & antd5(副) 共存

将 pro-components 默认引用的 antd2 指向 antd5

## umi-max

`@umijs/max` 模板项目，更多功能参考 [Umi Max 简介](https://umijs.org/docs/max/introduce)
