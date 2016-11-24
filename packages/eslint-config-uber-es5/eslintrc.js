'use strict';
module.exports = {
  'extends': [
    './best-practices.json',
    './errors.js',
    './miscellaneous.json',
    './node-js-and-common-js.json',
    './strict-mode.json',
    './stylistic-issues.json',
    './variables.json'
  ],
  'ecmaFeatures': {},
  'parser': 'espree',
  'env': {
    'browser': false,
    'node': false,
    'amd': false,
    'mocha': false,
    'jasmine': false,
    'es6': false
  },
  'globals': {
    '__dirname': false,
    '__filename': false,
    'require': false,
    'module': false
  }
};
