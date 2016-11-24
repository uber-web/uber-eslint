module.exports = {
  "extends": [
    "eslint-config-uber-es5",
    "./best-practices.json",
    "./miscellaneous.json",
    "./stylistic-issues.json"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "ecmaFeatures": {
    "experimentalObjectRestSpread": true
  },
  "plugins": [
    "react"
  ]
}
