module.exports = function (babelCore) {
  console.log('function-babel-plugins start !!!');

  return {
    visitor: {
      ImportDeclaration(path, state) {
        const { filename, opts = {} } = state;
      },
    },
  };
};
