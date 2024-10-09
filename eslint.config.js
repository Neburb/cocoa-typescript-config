import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  {
    files: ["**/*.{ts}"]
  },
  {
    languageOptions: {
        globals: globals.browser,
        parserOptions: {
            projectService: true,
            tsconfigRootDir: import.meta.dirname,
        },
    }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.strictTypeChecked,
  eslintConfigPrettier,
  { ignores: ["node_modules", "dist/**", "build/**", "webpack.config.js"] }
];
