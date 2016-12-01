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

'use strict';
var exec = require('child_process').exec;
var path = require('path');
var test = require('tape');

test('eslint file', function t(assert) {
  var file = require('../eslintrc.js');
  assert.ok(file.extends, 'has top level extends definition');
  assert.end();
});

test('a passing lint', function t(assert) {
  var lintFile = path.join(__dirname, 'fixtures/pass.js');
  exec('eslint -c eslintrc.js ' + lintFile, function onLint(err, stderr, stdout) {
    assert.ifError(err, 'does not error');
    assert.end();
  });
});

test('a failing lint', function t(assert) {
  var lintFile = path.join(__dirname, 'fixtures/fail.js');
  exec('eslint -c eslintrc.js ' + lintFile, function onLint(err, stderr, stdout) {
    assert.ok(err, 'exits with non-zero exit code');
    stderr = stderr.toString();

    // from best-practices
    assert.ok(stderr.indexOf('no-alert') >= 0,
      'fails no-alert rule');

    // from errors
    assert.ok(stderr.indexOf('no-cond-assign') >= 0,
      'fails no-cond-assign rule');
    assert.ok(stderr.indexOf('no-template-curly-in-string') >= 0,
      'fails no-template-curly-in-string rule');

    // from miscellaneous
    assert.ok(stderr.indexOf('no-native-reassign') >= 0,
      'fails no-native-reassign rule');

    // from strict-mode
    assert.ok(stderr.indexOf('strict') >= 0,
      'fails strict rule');

    // from stylistic-issues
    assert.ok(stderr.indexOf('quotes') >= 0,
      'fails quotes rule');
    assert.ok(stderr.indexOf('keyword-spacing') >= 0,
      'fails keyword-spacing rule');

    // from variables
    assert.ok(stderr.indexOf('no-unused-vars') >= 0,
      'fails no-unused-vars rule');
    assert.ok(stderr.indexOf('no-undef') >= 0,
      'fails no-undef rule');

    assert.end();
  });
});
