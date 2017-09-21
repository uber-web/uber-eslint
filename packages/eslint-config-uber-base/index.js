module.exports = {
  extends: [
    // Use 'eslint:recommended' as a base
    'eslint:recommended',
    // Turn off all rules that are unnecessary or might conflict with prettier
    require.resolve('eslint-config-prettier'),
  ],

  plugins: [
    // Use prettier for code format
    'eslint-plugin-prettier',
  ],

  rules: {
    // Prettier settings
    'prettier/prettier': [
      'error',
      {
        printWidth: 80,
        tabWidth: 2,
        useTabs: false,
        semi: true,
        singleQuote: true,
        trailingComma: 'es5',
        bracketSpacing: false,
        jsxBracketSameLine: false,
        rangeStart: 0,
        rangeEnd: Infinity,
        parser: 'babylon',
      },
    ],
    // We should have a very high bar for adding additional rules here.
    // By using `eslint:recommended` we have intentionally deferred our opinions to an external source.
    // Only well defended and consensus driven additions will be landed.
  },
};
