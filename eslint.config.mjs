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
      semi: ["warn", "always"], // предупреждение вместо ошибки
      indent: ["warn", 2], // предупреждение
      "brace-style": ["warn", "1tbs", { allowSingleLine: true }],
      "no-multiple-empty-lines": ["warn", { max: 2 }], // максимум 2 пустых строки
      "arrow-parens": ["warn", "always"],

      // правила для React
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",
      "react/jsx-uses-vars": "warn",
      
      // отключение некоторых правил
      "semi": "off",
      "indent": "off",
      "brace-style": "off",
      "no-multiple-empty-lines": "off",
      "arrow-parens": "off",
    },
  }
];	
