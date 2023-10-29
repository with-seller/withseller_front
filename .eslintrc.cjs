module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['@typescript-eslint', 'react-hooks', 'prettier'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/no-unknown-property': [
      'error',
      {
        ignore: ['css'],
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'import/named': 'off',
    'import/no-unresolved': 'off',
    '@typescript-eslint/no-var-requires': 'off',
  },
};
