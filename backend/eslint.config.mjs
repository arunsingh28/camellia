import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  { ignores: ["node_modules"] },
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  tseslint.configs.recommended,
  {
    rules: {
      "no-unused-vars": "warn",
      // "arrow-body-style": ["warn", "as-needed"],
    },
  },
];
