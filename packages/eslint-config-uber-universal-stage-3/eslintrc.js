module.exports = {

  extends: [
    require.resolve('eslint-config-uber-base-stage-3'),
    require.resolve('eslint-config-cup'),
  ],

  rules: {
    /**
     * Custom `no-undef` rule to allow appropriate globals within statically analyzable
     * `if (__NODE__)` or `if (__BROWSER__)` or `if (__DEV__)` checks
     */
    'no-undef': 'off',
    'cup/no-undef': ['error'],
  }
};
