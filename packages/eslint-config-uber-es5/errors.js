// These rules relate to possible syntax or logic errors
// Categorized as "errors" here: http://eslint.org/docs/rules/
module.exports = {
  rules: {
    /**
    * Possible Errors Section from http://eslint.org/docs/rules/:
    */

    // http://eslint.org/docs/rules/no-cond-assign
    "no-cond-assign": 2,

    // http://eslint.org/docs/rules/no-constant-condition
    "no-constant-condition": 2,

    // http://eslint.org/docs/rules/no-console
    // highly agreed upon
    "no-console": 2,

    // http://eslint.org/docs/rules/no-control-regex
    "no-control-regex": 2,

    // http://eslint.org/docs/rules/no-debugger
    // highly agreed upon
    "no-debugger": 2,

    // http://eslint.org/docs/rules/no-dupe-args
    "no-dupe-args": 2,

    // http://eslint.org/docs/rules/no-dupe-keys
    "no-dupe-keys": 2,

    // http://eslint.org/docs/rules/no-duplicate-case
    "no-duplicate-case": 2,

    // http://eslint.org/docs/rules/no-empty-character-class
    "no-empty-character-class": 2,

    // http://eslint.org/docs/rules/no-empty
    // highly agreed upon
    "no-empty": 2,

    // http://eslint.org/docs/rules/no-ex-assign
    // abnormal behavior in ie 6-8
    "no-ex-assign": 2,

    // http://eslint.org/docs/rules/no-extra-boolean-cast
    // highly agreed upon
    "no-extra-boolean-cast": 2,

    // http://eslint.org/docs/rules/no-extra-parens
    "no-extra-parens": [2, "functions"],

    // http://eslint.org/docs/rules/no-extra-semi
    // highly agreed upon
    "no-extra-semi": 2,

    // http://eslint.org/docs/rules/no-func-assign
    "no-func-assign": 2,

    // http://eslint.org/docs/rules/no-inner-declarations
    "no-inner-declarations": [
      2,
      "functions"
    ],

    "no-invalid-regexp": 2,

    "no-irregular-whitespace": 2,

    "no-obj-calls": 2,

    // http://eslint.org/docs/rules/no-prototype-builtins
    "no-prototype-builtins": 0,

    "no-regex-spaces": 2,

    "no-sparse-arrays": 2,

    // http://eslint.org/docs/rules/no-template-curly-in-string
    // not available in this lower version of eslint
    // "no-template-curly-in-string": 2,

    "no-unexpected-multiline": 2,

    "no-unreachable": 2,

    // http://eslint.org/docs/rules/no-unsafe-finally
    "no-unsafe-finally": 2,

    // http://eslint.org/docs/rules/no-unsafe-negation
    // not available in this lower version of eslint
    // "no-unsafe-negation": 2,

    "use-isnan": 2,

    "valid-jsdoc": 0,

    "valid-typeof": 2
  }
}
