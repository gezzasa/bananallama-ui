/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');
module.exports = {
  env: {
    browser: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:vue/vue3-essential',
    '@vue/eslint-config-typescript',
    'plugin:vuejs-accessibility/recommended',
    'plugin:storybook/recommended',
  ],
  rules: {
    'array-element-newline': [
      'error',
      {
        'multiline': true,
        'minItems': 4,
      },
    ],
    'array-bracket-newline': [
      'error',
      {
        'multiline': true,
        'minItems': 4,
      },
    ],
    camelcase: 'off',
    'comma-dangle': ['error', 'always-multiline'],
    indent: [
      2,
      2,
      {
        VariableDeclarator: 2,
      },
    ],
    'max-len': [
      'error',
      {
        code: 120,
        tabWidth: 2,
        ignoreTemplateLiterals: true,
        ignoreStrings: true,
        // Ignore long `d` attributes in SVG `path` elements
        // and long `href` attributes in `a` element
        // and long `class` attributes in general elements
        // and long `path` attributes in vue-i18n `i18n` components.
        ignorePattern: '(d|href|class|path)="([\\s\\S]*?)"',
      },
    ],
    'no-console': ['error'],
    'no-trailing-spaces': 'error',
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    semi: ['error', 'always'],
  },
};