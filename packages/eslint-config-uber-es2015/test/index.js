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
var fs = require('fs');

test('eslint file', function t(assert) {
  var file = require('../eslintrc.js');
  assert.ok(file.extends, 'has top level extends definition');
  assert.end();
});

test('a passing lint', function t(assert) {
  var lintFile = path.join(__dirname, 'fixtures/pass.js');
  exec('eslint -c eslintrc.js ' + lintFile, function onLint(err, stderr, stdout) {
    assert.ifError(err, 'does not error');
    assert.equal(stderr.toString(), '',
      'passes all linting');
    assert.end();
  });
});

test('a failing lint', function t(assert) {
  var lintFile = path.join(__dirname, 'fixtures/fail.js');
  exec('eslint -c eslintrc.js ' + lintFile, function onLint(err, stderr, stdout) {
    assert.ok(err, 'exits with non-zero exit code');
    stderr = stderr.toString();

    // es2015 rules
    // best-practices
    assert.ok(stderr.indexOf('accessor-pairs') >= 0,
      'fails use accessor-pairs rule');

    // ecmascript-6
    assert.ok(stderr.indexOf('prefer-const') >= 0,
      'fails use prefer-const rule');
    assert.ok(stderr.indexOf('arrow-spacing') >= 0,
      'fails arrow-spacing rule');
    assert.ok(stderr.indexOf('no-var') >= 0,
      'fails the no-var rule');
    assert.ok(stderr.indexOf('arrow-spacing') >= 0,
      'fails the arrow-spacing rule');

    // miscellaneous

    // stylistic-issues
    assert.ok(stderr.indexOf('no-continue') >= 0,
      'fails the no-continue rule');

    // es5 rules
    assert.ok(stderr.indexOf('quotes') >= 0,
      'fails the quotes rule');
    assert.ok(stderr.indexOf('camel_case') >= 0,
      'fails the camel_case rule');
    assert.ok(stderr.indexOf('sort-vars') >= 0,
      'fails use sort-vars');
    assert.end();
  });
});

test('jsx integration - a failing lint', function t(assert) {
  var lintFile = path.join(__dirname, 'fixtures/fail.js');
  exec('eslint -c eslintrc.jsx.js ' + lintFile, function onLint(err, stderr, stdout) {
    assert.ok(err, 'exits with non-zero exit code');
    stderr = stderr.toString();
    // ensures that extending uber-jsx does not mangle uber-es2015 override
    assert.ok(stderr.indexOf('camelcase') === -1,
      'passes the camelcase rule');
    assert.ok(stderr.indexOf('sort-vars') === -1,
      'fails use sort-vars');
    assert.end();
  });
});
