import { CLIEngine, Linter} from 'eslint';

export type Config = CLIEngine.Options & Linter.Config;

const eslintConfig: Config = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "prettier"],
  env: {
    node: true,
    commonjs: true,
    es6: true,
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended"
  ],
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: "module"
  },
  rules: {
    "prettier/prettier": "warn",
    "no-unused-vars": "error",
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/camelcase": 0,
    "@typescript-eslint/no-use-before-define": 0,
    "@typescript-eslint/no-inferrable-types": 0
  }
};

export default eslintConfig;
