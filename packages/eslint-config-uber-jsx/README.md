# eslint-config-uber-jsx [![NPM version][npm-image]][npm-url]

> The base jsx eslint config for web JavaScript at Uber

## Installation

Install [eslint](https://www.github.com/eslint/eslint) either locally or globally.

```sh
npm install --save-dev eslint
```

If you installed `eslint` locally, you should install `eslint-config-uber-jsx` locally too. Otherwise, install it globally.

```sh
npm install --save-dev eslint-config-uber-jsx
```

## Usage

Initialize a `.eslintrc` file or append to an existing one.

*Note: you can also use a `.eslintrc.json` file instead*

#### Before

*You'll want to extend from `eslint-config-uber-es5` first since some jsx rules depend on the base rules.*

```js
{
  "rules": {},
  "extends": [
    "eslint-config-uber-es5"
  ]
}
```

#### After

```js
{
  "rules": {},
  "extends": [
    "eslint-config-uber-es5",
    "eslint-config-uber-jsx"
  ]
}
```

See [eslint docs](http://eslint.org/) for more information.

[npm-image]: https://badge.fury.io/js/eslint-config-uber-jsx.svg
[npm-url]: https://npmjs.org/package/eslint-config-uber-jsx