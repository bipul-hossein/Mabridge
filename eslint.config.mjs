import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: {
      globals: globals.browser,
      // Including Node.js globals directly
      env: {
        browser: true,
        node: true,
        es2021: true,
      },
    },
  },
  pluginJs.configs.recommended,
];
