module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "airbnb",
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: ["react", "@typescript-eslint", "prettier"],
  rules: {
    "react/react-in-jsx-scope": 0,
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
  },
  "no-console": ["warn", { allow: ["info", "error"] }],
  indent: [
    "error",
    2,
    {
      SwitchCase: 1,
    },
  ],
  quotes: ["error", "single"],
  semi: ["error", "always"],
  "space-in-parens": ["error"],
  "space-infix-ops": "error",
  "object-curly-spacing": ["error", "always"],
  "comma-spacing": "error",
  "eol-last": ["error", "always"],
  "arrow-spacing": [
    "error",
    {
      before: true,
      after: true,
    },
  ],
  "array-bracket-spacing": "error",
  "prefer-const": "error",
  "no-var": "error",
  "rest-spread-spacing": "error",
  "prefer-arrow-callback": "error",
  "object-shorthand": ["error", "always"],
  "no-unused-vars": ["error"],
};
