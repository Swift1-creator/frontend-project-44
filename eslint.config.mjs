import globals from "globals";
import pluginReact from "eslint-plugin-react";
import pkg from '@typescript-eslint/eslint-plugin';
const { configs: tsconfigs } = pkg;
export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: "module",
      },
    },
    plugins: {
      react: pluginReact,
      "@typescript-eslint": tsconfigs,
    },
    rules: {
      semi: ["error", "always"],
      indent: ["error", 2],
      "brace-style": ["error", "1tbs", { allowSingleLine: true }],
      "no-multiple-empty-lines": ["error", { max: 0 }],
      "arrow-parens": ["error", "always"],
      // правила для React
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",
      "react/jsx-uses-vars": "error",
    },
  },
];
