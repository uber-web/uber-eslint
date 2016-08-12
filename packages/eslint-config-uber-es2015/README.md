# eslint-config-uber-es2015 [![NPM version][npm-image]][npm-url]

> The base es2015 eslint config for web JavaScript at Uber

## Installation

Install [eslint](https://www.github.com/eslint/eslint) either locally or globally.

```sh
npm install --save-dev eslint
```

If you installed `eslint` locally, you should install `eslint-config-uber-es2015` locally too. Otherwise, install it globally.

```sh
npm install --save-dev eslint-config-uber-es2015
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

```js
{
  "rules": {},
  "extends": [
    "eslint-config-uber-es2015"
  ]
}
```

*`eslint-config-uber-es5` is already included, so there's no need to extend it.*

===

[:back: to uber-eslint home](../../README.md)


[npm-image]: https://badge.fury.io/js/eslint-config--uber-es2015.svg
[npm-url]: https://npmjs.org/package/eslint-config-uber-es2015