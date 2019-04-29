// Copyright (c) 2016 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
module.exports = {
  extends: [
    // Use 'eslint:recommended' as a base
    'eslint:recommended',
    // Turn off all rules that are unnecessary or might conflict with prettier
    require.resolve('eslint-config-prettier'),
  ],

  plugins: [
    // Use prettier for code format
    'eslint-plugin-prettier',
  ],

  rules: {
    'no-unused-vars': [
      'error',
      {vars: 'all', args: 'none', ignoreRestSiblings: true},
    ],
    // Prettier settings
    'prettier/prettier': [
      'error',
      {
        printWidth: 80,
        tabWidth: 2,
        useTabs: false,
        semi: true,
        singleQuote: true,
        trailingComma: 'es5',
        bracketSpacing: false,
        jsxBracketSameLine: false,
        rangeStart: 0,
        rangeEnd: Infinity,
      },
    ],
    // We should have a very high bar for adding additional rules here.
    // By using `eslint:recommended` we have intentionally deferred our opinions to an external source.
    // Only well defended and consensus driven additions will be landed.
  },
};
