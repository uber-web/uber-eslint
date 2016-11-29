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
  var lintFile = path.join(__dirname, 'fixtures/pass.jsx');
  exec('eslint -c eslintrc.js ' + lintFile, function onLint(err, stderr, stdout) {
    assert.ifError(err, 'does not error');
    assert.equal(stderr.toString(), '',
      'passes all linting');
    assert.end();
  });
});

test('a failing lint', function t(assert) {
  var lintFile = path.join(__dirname, 'fixtures/fail.jsx');
  exec('eslint -c eslintrc.js ' + lintFile, function onLint(err, stderr, stdout) {
    assert.ok(err, 'exits with non-zero exit code');
    stderr = stderr.toString();

    // miscellaneous
    assert.ok(stderr.indexOf('react/react-in-jsx-scope') >= 0,
      'fails react/react-in-jsx-scope rule');
    assert.ok(stderr.indexOf('react/jsx-no-undef') >= 0,
      'fails react/jsx-no-undef');

    // stylistic-issues
    assert.ok(stderr.indexOf('jsx-quotes') >= 0,
      'fails the jsx-quotes rule');

    // testing es5 rules contained
    assert.ok(stderr.indexOf('strict') >= 0,
      'fails strict rule');
    assert.ok(stderr.indexOf('no-undef') >= 0,
      'fails the no-undef rule');
    assert.ok(stderr.indexOf('no-unused-vars') >= 0,
      'fails the no-unused-vars rule');

    assert.end();
  });
});

test('es2015 integration - a failing lint', function t(assert) {
  var lintFile = path.join(__dirname, 'fixtures/fail.jsx');
  exec('eslint -c eslintrc.es2015.js ' + lintFile, function onLint(err, stderr, stdout) {
    assert.ok(err, 'exits with non-zero exit code');
    stderr = stderr.toString();
    // ensures that extending uber-es2015 does not mangle uber-jsx override
    assert.ok(stderr.indexOf('camelcase') === -1,
      'passes the camelcase rule');
    assert.end();
  });
});
