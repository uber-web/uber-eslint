# uber-eslint [![Build Status][travis-image]][travis-url] [![Coverage percentage][coveralls-image]][coveralls-url]

> Write prettier JavaScript

uber-eslint is a collection of **eslint configs for web JavaScript at Uber**.

## Installation

Install [eslint](https://www.github.com/eslint/eslint) either locally or globally.

```sh
npm install --save-dev eslint
```

Now that you have eslint installed, you can extend one or multiple of the eslint configs contained.

There are three configs contained in this repo:

* [eslint-config-uber-es5](packages/eslint-config-uber-es5)
* [eslint-config-uber-es2015](packages/eslint-config-uber-es2015)
* [eslint-config-uber-jsx](packages/eslint-config-uber-jsx)


Let's install `eslint-config-uber-es2015` as an example. If you installed `eslint` locally, you should install the eslint config(s) of choice locally too. Otherwise, install the eslint config(s) globally.

```sh
npm install --save-dev eslint-config-uber-es5
```

## Usage

Initialize a `.eslintrc` file or append to an existing one.

*Note: you can also configure eslint with [other types of config files](http://eslint.org/docs/user-guide/configuring#configuration-file-formats)*

#### Before

```js
{
  "rules": {},
  "extends": []
}
```

#### After

Assuming you are writing es2015 jsx, you'd enable it like so:

```js
{
  "rules": {},
  "extends": [
    "eslint-config-uber-es2015",
    "eslint-config-uber-jsx"
  ]
}
```

You can also mix these with external eslint configs.

===

See [eslint docs](http://eslint.org/) for more information.

[travis-image]: https://travis-ci.org/uber-web/uber-eslint.svg?branch=master
[travis-url]: https://travis-ci.org/uber-web/uber-eslint?branch=master
[coveralls-image]: https://coveralls.io/repos/uber-web/uber-eslint/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/r/uber-web/uber-eslint?branch=master