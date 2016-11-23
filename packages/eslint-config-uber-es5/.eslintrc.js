module.exports = {
  "extends": [
    ".eslintrc-errors.js"
  ],
  "ecmaFeatures": {},
  "parser": "espree",
  "env": {
    "browser": false,
    "node": false,
    "amd": false,
    "mocha": false,
    "jasmine": false,
    "es6": false
  },
  "globals": {
    "__dirname": false,
    "__filename": false,
    "require": false,
    "module": false
  },
  "rules": {
    // http://eslint.org/docs/rules/no-alert
    "no-alert": 2,

    // http://eslint.org/docs/rules/no-array-constructor
    "no-array-constructor": 2,

    // http://eslint.org/docs/rules/no-bitwise
    "no-bitwise": 0,

    // http://eslint.org/docs/rules/no-caller
    "no-caller": 2,

    // http://eslint.org/docs/rules/no-delete-var
    "no-delete-var": 2,

    // http://eslint.org/docs/rules/no-div-regex
    "no-div-regex": 2,

    // http://eslint.org/docs/rules/no-else-return
    "no-else-return": 2,

    // http://eslint.org/docs/rules/no-eq-null
    "no-eq-null": 2,

    // http://eslint.org/docs/rules/no-extend-native
    "no-extend-native": 2,

    // http://eslint.org/docs/rules/no-labels
    "no-labels": 2,

    // http://eslint.org/docs/rules/no-eval
    // highly agreed upon
    "no-eval": 2,

    // http://eslint.org/docs/rules/no-extra-bind
    // highly agreed upon
    "no-extra-bind": 2,

    // http://eslint.org/docs/rules/no-fallthrough
    // highly agreed upon
    "no-fallthrough": 2,

    // http://eslint.org/docs/rules/no-floating-decimal
    "no-floating-decimal": 2,

    "no-implicit-coercion": 2,
    "no-implied-eval": 2,
    "no-inline-comments": 2,
    "no-invalid-this": 2,
    "no-iterator": 2,
    "no-label-var": 2,
    "no-labels": 2,
    "no-lone-blocks": 2,
    "no-lonely-if": 2,
    "no-loop-func": 2,
    "no-mixed-requires": [
      2,
      false
    ],
    "no-mixed-spaces-and-tabs": [
      2,
      false
    ],
    "linebreak-style": [
      2,
      "unix"
    ],
    "no-multi-spaces": 2,
    "no-multi-str": 2,
    "no-multiple-empty-lines": [
      2,
      {
        "max": 1
      }
    ],
    "no-native-reassign": 2,
    "no-negated-in-lhs": 2,
    "no-nested-ternary": 0,
    "no-new": 2,
    "no-new-func": 2,
    "no-new-object": 2,
    "no-new-require": 2,
    "no-new-wrappers": 2,
    "no-octal": 2,
    "no-octal-escape": 2,
    "no-param-reassign": 0,
    "no-path-concat": 2,
    "no-plusplus": 0,
    "no-process-env": 2,
    "no-process-exit": 2,
    "no-proto": 2,
    "no-redeclare": 2,
    "no-reserved-keys": 0,
    "no-restricted-modules": 0,
    "no-return-assign": 2,
    "no-script-url": 2,
    "no-self-compare": 2,
    "no-sequences": 2,
    "no-shadow": 2,
    "no-shadow-restricted-names": 2,
    "no-spaced-func": 2,
    "no-sync": 0,
    "no-ternary": 0,
    "no-trailing-spaces": 2,
    "no-throw-literal": 2,
    "no-undef-init": 2,
    "no-undefined": 0,
    "no-underscore-dangle": 0,
    "no-unneeded-ternary": 2,
    "no-unused-expressions": 2,
    "no-unused-vars": [
      2,
      {
        "vars": "all",
        "args": "none"
      }
    ],
    "no-use-before-define": [
      2,
      "nofunc"
    ],
    "no-useless-call": 2,
    "no-void": 1,
    "no-warning-comments": [
      0,
      {
        "terms": [
          "todo",
          "fixme",
          "xxx"
        ],
        "location": "start"
      }
    ],
    "no-with": 2,

    "array-bracket-spacing": [
      2,
      "never"
    ],
    "block-scoped-var": 2,
    "block-spacing": [2, "always"],
    "brace-style": [
      2,
      "1tbs"
    ],
    "callback-return": [2, ["callback", "cb", "next", "done"]],
    "camelcase": 2,
    "comma-dangle": [
      2,
      "never"
    ],
    "comma-spacing": [
      2,
      {
        "before": false,
        "after": true
      }
    ],
    "comma-style": [
      2,
      "last"
    ],
    "complexity": [
      2,
      11
    ],
    "computed-property-spacing": [
      2,
      "never"
    ],
    "consistent-return": 2,
    "consistent-this": [
      2,
      "self"
    ],
    "curly": [
      2,
      "all"
    ],
    "default-case": 2,
    "dot-location": [
      2,
      "property"
    ],
    "dot-notation": [
      2,
      {
        "allowKeywords": true
      }
    ],
    "eol-last": 2,
    "eqeqeq": 2,
    "func-names": 2,
    "func-style": [
      0,
      "declaration"
    ],
    "guard-for-in": 2,
    "handle-callback-err": [
      2,
      "^(err|error|anySpecificError)$"
    ],
    "id-length": 0,
    "id-match": 0,
    "indent": [2, 2],
    "init-declarations": 0,
    "key-spacing": [
      2,
      {
        "beforeColon": false,
        "afterColon": true
      }
    ],
    "max-depth": [
      2,
      3
    ],
    "max-len": [
      2,
      100,
      4
    ],
    "max-nested-callbacks": [
      2,
      3
    ],
    "max-params": [
      2,
      5
    ],
    "max-statements": [
      2,
      25
    ],
    "new-cap": [
      2,
      {
        "newIsCap": true,
        "capIsNew": false
      }
    ],
    "new-parens": 2,
    "newline-after-var": 0,
    "object-curly-spacing": [
      2,
      "never"
    ],
    "one-var": [
      2,
      "never"
    ],
    "operator-assignment": [
      0,
      "always"
    ],
    "operator-linebreak": [
      2,
      "after"
    ],
    "padded-blocks": 0,
    "quotes": [
      2,
      "single"
    ],
    "radix": 2,
    "semi": 2,
    "semi-spacing": [
      2,
      {
        "before": false,
        "after": true
      }
    ],
    "keyword-spacing": [
      2
    ],
    "space-before-blocks": [
      2,
      "always"
    ],
    "space-before-function-paren": [
      2,
      "never"
    ],
    "space-in-parens": [
      2,
      "never"
    ],
    "space-infix-ops": 2,
    "space-unary-ops": [
      2,
      {
        "words": true,
        "nonwords": false
      }
    ],
    "spaced-comment": [
      2,
      "always",
      {
        "exceptions": [
          "-",
          "=",
          "+",
          "*"
        ]
      }
    ],
    "strict": [2, "global"],
    "vars-on-top": 0,
    "wrap-iife": 2,
    "yoda": [
      2,
      "never"
    ]
  }
}
