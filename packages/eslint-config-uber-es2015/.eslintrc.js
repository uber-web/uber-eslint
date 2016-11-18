module.exports = {
  "extends": [
    "eslint-config-uber-es5"
  ],
  "env": {
    "es6": true
  },
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module"
  },
  "rules": {
    "no-class-assign": 2,
    "no-const-assign": 2,
    "no-continue": 2,
    "no-dupe-class-members": 2,
    "no-this-before-super": 2,
    "no-var": 2,
    "prefer-arrow-callback": 0,
    "prefer-const": 2,
    "prefer-reflect": 0,
    "prefer-spread": 2,
    "prefer-template": 2,
    "arrow-parens": 0,
    "arrow-spacing": [2, {"before": true, "after": true }],
    "accessor-pairs": [
      2,
      {
        "getWithoutSet": true
      }
    ],
    "constructor-super": 2,
    "func-style": [
      2,
      "declaration",
      {
        "allowArrowFunctions": true
      }
    ],
    "generator-star-spacing": [
      2,
      {
        "before": false,
        "after": true
      }
    ],
    "lines-around-comment": [
      0,
      {
        "beforeBlockComment": true,
        "afterBlockComment": false,
        "beforeLineComment": false,
        "afterLineComment": false,
        "allowBlockStart": true,
        "allowBlockEnd": true
      }
    ],
    "object-shorthand": [
      2,
      "always"
    ],
    "quote-props": [
      2,
      "as-needed"
    ],
    "require-yield": 2,
    "sort-vars": 2,
    "wrap-regex": 2
  },
  "ecmaFeatures": {
    "arrowFunctions": true,
    "binaryLiterals": true,
    "blockBindings": true,
    "classes": true,
    "defaultParams": true,
    "destructuring": true,
    "forOf": true,
    "generators": true,
    "modules": true,
    "objectLiteralComputedProperties": true,
    "objectLiteralDuplicateProperties": true,
    "objectLiteralShorthandMethods": true,
    "objectLiteralShorthandProperties": true,
    "octalLiterals": true,
    "regexUFlag": true,
    "regexYFlag": true,
    "restParams": true,
    "spread": true,
    "superInFunctions": true,
    "templateStrings": true,
    "unicodeCodePointEscapes": true
  }
}
