module.exports = {

  extends: [
    require.resolve('eslint-config-uber-base')
  ],

  plugins: [
    'eslint-plugin-flowtype',
    'eslint-plugin-react'
  ],

  rules: {
    /**
     * Mark flow type identifiers as defined
     * https://github.com/gajus/eslint-plugin-flowtype#define-flow-type
     */
    'flowtype/define-flow-type': 1,
    /**
     * Mark flow type annotations as used
     * https://github.com/gajus/eslint-plugin-flowtype#use-flow-type
     */
    'flowtype/use-flow-type': 1,

    //////////////////////////////////////////////////////////////////
    // React Specific Rules
    // https://www.npmjs.com/package/eslint-plugin-react
    // Exhaustive list of rules as of Feb 15, 2017
    //////////////////////////////////////////////////////////////////
    /*
     * Prevent missing displayName in a React component definition
     */
    'react/display-name': 'error',
    /*
     * className and style props should not be passed to components.
     * This is an indicator of a leaky component abstraction.
     */
    'react/forbid-component-props': 'error',
    /*
     * We use flow instead of proptypes
     */
    'react/forbid-prop-types': 'error',
    /*
     * Prevent using Array index in key props
     */
    'react/no-array-index-key': 'error',
    /*
     * Children should never be passed as a prop, they should be specified as child JSX nodes
     */
    'react/no-children-prop': 'error',
    /*
     * Do not allow dangerouslySetInnerHTML, which opens up possible XSS vulnerabilities
     */
    'react/no-danger': 'error',
    /*
     * Prevent problem with children and props.dangerouslySetInnerHTML
     */
    'react/no-danger-with-children': 'error',
    /*
     * Prevent usage of deprecated methods
     */
    'react/no-deprecated': 'error',
    /*
     * Prevent usage of setState in componentDidMount
     */
    'react/no-did-mount-set-state': 'error',
    /*
     * Prevent usage of setState in componentDidUpdate
     */
    'react/no-did-update-set-state': 'error',
    /*
     * Prevent direct mutation of this.state
     */
    'react/no-direct-mutation-state': 'error',
    /*
     * Prevent usage of findDOMNode
     */
    'react/no-find-dom-node': 'error',
    /*
     * Prevent usage of isMounted
     */
    'react/no-is-mounted': 'error',
    /*
     * Prevent multiple component definition per file.
     * Ignore stateless components, as it often makes sense to
     * group small components together in a file.
     */
    'react/no-multi-comp': ['error', { "ignoreStateless": true }],
    /*
     * Prevent usage of the return value of React.render
     */
    'react/no-render-return-value': 'error',
    /*
     * No problem with calling setState
     */
    'react/no-set-state': 'off',
    /*
     * Prevent using string references in ref attribute.
     */
    'react/no-string-refs': 'error',
    /*
     * Prevent invalid characters from appearing in markup
     */
    'react/no-unescaped-entities': 'error',
    /*
     * Prevent usage of unknown DOM property (fixable)
     */
    'react/no-unknown-property': 'error',
    /*
     * We use flow instead of proptypes
     */
    'react/no-unused-prop-types': 'off',
    /*
     * Enforce ES5 or ES6 class for React Components
     */
    'react/prefer-es6-class': 'error',
    /*
     * Enforce stateless React Components to be written as a pure function
     */
    'react/prefer-stateless-function': 'error',
    /*
     * We use flow instead of proptypes
     */
    'react/prop-types': 'off',
    /*
     * Prevent missing React when using JSX
     */
    'react/react-in-jsx-scope': 'error',
    /*
     * Not using proptypes
     */
    'react/require-default-props': 'off',
    /*
     * TODO: Should we enforce React components to have a shouldComponentUpdate method
     */
    'react/require-optimization': 'off',
    /*
     * Enforce ES5 or ES6 class for returning value in render function
     */
    'react/require-render-return': 'error',
    /*
     * Prevent extra closing tags for components without children (fixable)
     */
    'react/self-closing-comp': 'error',
    /*
     * Enforce component methods order
     */
    'react/sort-comp': 'error',
    /*
     * We use flow instead of proptypes
     */
    'react/sort-prop-types': 'off',
    /*
     * Enforce style prop value being an object
     */
    'react/style-prop-object': 'error',
    //////////////////////////////////////////////////////////////////
    // JSX Specific Rules
    // https://www.npmjs.com/package/eslint-plugin-react
    // Exhaustive list of rules as of Feb 15, 2017
    //////////////////////////////////////////////////////////////////
    /*
     * Enforce boolean attributes notation in JSX (fixable)
     */
    'react/jsx-boolean-value': 'error',
    /*
     * Validate closing bracket location in JSX (fixable)
     */
    'react/jsx-closing-bracket-location': 'error',
    /*
     * Formatting should be handled by prettier
     */
    'react/jsx-curly-spacing': 'off',
    /*
     * Formatting should be handled by prettier
     */
    'react/jsx-equals-spacing': 'off',
    /*
     * All files should have the same extension (.js)
     */
    'react/jsx-filename-extension': 'off',
    /*
     * Formatting should be handled by prettier
     */
    'react/jsx-first-prop-new-line': 'off',
    /*
     * Enforce event handler naming conventions in JSX
     */
    'react/jsx-handler-names': 'error',
    /*
     * Formatting should be handled by prettier
     */
    'react/jsx-indent': 'off',
    /*
     * Formatting should be handled by prettier
     */
    'react/jsx-indent-props': 'off',
    /*
     * Validate JSX has key prop when in array or iterator
     */
    'react/jsx-key': 'error',
    /*
     * Formatting should be handled by prettier
     */
    'react/jsx-max-props-per-line': 'off',
    /*
     * Allow usage of .bind() and arrow functions in JSX props
     */
    'react/jsx-no-bind': 'off',
    /*
     * Prevent comments from being inserted as text nodes
     */
    'react/jsx-no-comment-textnodes': 'error',
    /*
     * Prevent duplicate props in JSX
     */
    'react/jsx-no-duplicate-props': 'error',
    /*
     * unwrapped JSX strings are fine
     */
    'react/jsx-no-literals': 'off',
    /*
     * TODO: Not sure if we want this
     */
    'react/jsx-no-target-blank': 'off',
    /*
     * Disallow undeclared variables in JSX
     */
    'react/jsx-no-undef': 'error',
    /*
     * TODO: Not sure if we want this
     */
    'react/jsx-pascal-case': 'off',
    /*
     * We don't care about alphabetical sorting
     */
    'react/jsx-sort-props': 'off',
    /*
     * Formatting should be handled by prettier
     */
    'react/jsx-space-before-closing': 'off',
    /*
     * Formatting should be handled by prettier
     */
    'react/jsx-tag-spacing': 'off',
    /*
     * Prevent React to be incorrectly marked as unused
     */
    'react/jsx-uses-react': 'error',
    /*
     * Prevent variables used in JSX to be incorrectly marked as unused
     */
    'react/jsx-uses-vars': 'error',
    /*
     * Formatting should be handled by prettier
     */
    'react/jsx-wrap-multilines': 'off',
  },

  /**
   * We need the Babel parser for dynamic imports, Flow, etc.
   */
  parser: 'babel-eslint',

  parserOptions: {
    ecmaVersion: 2017,
    /**
     * sourceType: 'module' allows for import/export
     */
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },

  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: true
    }
  }

};
