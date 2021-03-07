module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'airbnb-base'
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  rules: {
    'no-console': ['error', { allow: ['warn', 'log', 'error'] }],
    'comma-dangle': ['error', 'never'],
    'arrow-parens': ['error', 'as-needed']
  }
};
