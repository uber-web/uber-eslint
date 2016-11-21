// things that will or could cause errors in certain environments
module.exports = {
  rules: {
    // http://eslint.org/docs/rules/no-caller
    // throws error in strict mode anyways
    "no-caller": 2,

    // ie8- bug
    // http://eslint.org/docs/rules/no-catch-shadow
    "no-catch-shadow": 2,

    // http://eslint.org/docs/rules/no-dupe-keys
    "no-dupe-keys": 2,

    // http://eslint.org/docs/rules/no-dupe-args
    "no-dupe-args": 2,

    // http://eslint.org/docs/rules/no-duplicate-case
    "no-duplicate-case": 2,

    // http://eslint.org/docs/rules/no-eq-null
    "no-eq-null": 2,

    // http://eslint.org/docs/rules/no-ex-assign
    // abnormal behavior in ie 6-8
    "no-ex-assign": 2,

    // http://eslint.org/docs/rules/no-extend-native
    // can create bugs in downstream code
    "no-extend-native": 2,



    "no-undef": 2
  }
}
