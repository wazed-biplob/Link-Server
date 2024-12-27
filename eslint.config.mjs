import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: [
      "node_modules/**", // Ignore the node_modules directory
      "dist/**", // Ignore the dist directory
      "*.config.js", // Ignore configuration files
    ],
    files: ["*.ts"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
      ecmaFeatures: {
        jsx: false,
      },
    },
    plugins: ["@typescript-eslint"],
    extends: [
      "eslint:recommended", // ESLint core recommendations
      "plugin:@typescript-eslint/recommended", // TypeScript-specific rules
    ],
    env: {
      node: true,
      es6: true,
    },
    rules: {
      // Add your custom rules or override defaults
      "no-console": "warn",
      "@typescript-eslint/no-unused-vars": ["error"],
    },
  },
];
