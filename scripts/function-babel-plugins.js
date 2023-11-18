module.exports = function (babelCore) {
  return {
    visitor: {
      ImportDeclaration(path, state) {
        const { filename, opts = {} } = state;
        if (
          (opts.libraryName || ['antd']).some((item) => filename.includes(item))
        ) {
          console.log('function-babel-plugins --------------------------');
          console.log(filename, 'filename');
        }
      },
    },
  };
};
