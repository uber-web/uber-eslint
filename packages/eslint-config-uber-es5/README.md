# eslint-config-uber-es5 [![NPM version][npm-image]][npm-url]

> The base eslint config for web JavaScript at Uber

## Installation

Install [eslint](https://www.github.com/eslint/eslint) either locally or globally.

```sh
npm install --save-dev eslint
```

If you installed `eslint` locally, you should install `eslint-config-uber-es5` locally too. Otherwise, install it globally.

```sh
npm install --save-dev eslint-config-uber-es5
```

## Usage

Initialize a `.eslintrc` file or append to an existing one.

*Note: you can also use a `.eslintrc.json` file instead*

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
    "eslint-config-uber-es5"
  ]
}
```

See [eslint docs](http://eslint.org/) for more information.

[npm-image]: https://badge.fury.io/js/eslint-config-uber-es5.svg
[npm-url]: https://npmjs.org/package/eslint-config-uber-es5