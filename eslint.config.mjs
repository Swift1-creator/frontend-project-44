// eslint.config.mjs
export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: "module",
      },
    },
    rules: {
      semi: "off",
      indent: "off",
      "brace-style": "off",
      "no-multiple-empty-lines": "off",
      "arrow-parens": "off",
      "quotes": "off",
      "no-trailing-spaces": "off",
      "no-dupe-keys": "off",
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",
      "react/jsx-uses-vars": "off",
    },
  }
]
