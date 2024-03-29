import { Linter } from "eslint";

type Config = Linter.Config;

const eslintConfig: Config = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "prettier"],
  env: {
    node: true,
    commonjs: true,
    es6: true,
  },
  extends: [
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: "module",
  },
  rules: {
    "prettier/prettier": "warn",
    "no-unused-vars": "error",
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/camelcase": 0,
    "@typescript-eslint/no-use-before-define": 0,
    "@typescript-eslint/no-inferrable-types": 0,
  },
};

export = eslintConfig;
