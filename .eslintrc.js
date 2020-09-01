module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    "@typescript-eslint/ban-ts-ignore": "off",   // 追記
    "@typescript-eslint/camelcase": "off",       // 追記
    "@typescript-eslint/no-explicit-any": "off", // 追記 
    "@typescript-eslint/no-empty-function": "off",  // 追記
  }
}
