module.exports = {
  extends: [
    './best-practices.json',
    './ecmascript-6.json',
    './miscellaneous.json',
    './stylistic-issues.json',
    'eslint-config-uber-es5'
  ],
  env: {
    es6: true
  },
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true
    }
  }
};
