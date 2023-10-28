module.exports = {
  root: true,
  env: { browser: true, es2016: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'quotes': ['error', 'single'],
    'no-duplicate-imports': 'error',
    'no-console': ['warn', { 'allow': ['warn', 'error', 'info'] }],
    'no-unused-vars': 'error',
    'no-multiple-empty-lines': 'error',
    // 'react-refresh/only-export-components': [
    //   'warn',
    //   { allowConstantExport: true },
    // ],
  },
}
