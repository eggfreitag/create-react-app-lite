module.exports = {
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  plugins: ["prettier", "react"],
  env: {
    browser: true,
    jest: true,
    es6: true,
  },
};
