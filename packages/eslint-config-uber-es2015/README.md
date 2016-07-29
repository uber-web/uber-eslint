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

*Note: you can also use a `.eslintrc.json` file instead*

#### Before

*You'll want to extend from `eslint-config-uber-base` first since some es2015 rules depend on the base rules.*

```js
{
  "rules": {},
  "extends": [
    "eslint-config-uber-base"
  ]
}
```

#### After

```js
{
  "rules": {},
  "extends": [
    "eslint-config-uber-base",
    "eslint-config-uber-es2015"
  ]
}
```

See [eslint docs](http://eslint.org/) for more information.

[npm-image]: https://badge.fury.io/js/eslint-config--uber-es2015.svg
[npm-url]: https://npmjs.org/package/eslint-config-uber-es2015