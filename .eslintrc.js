module.exports = {
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  plugins: ["react", "prettier"],
  env: {
    browser: true,
    jest: true,
    es6: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {},
};
