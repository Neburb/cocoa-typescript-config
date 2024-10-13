const globals = require("globals");
const pluginJs = require("@eslint/js");
const tseslint = require("typescript-eslint");
const eslintConfigPrettier = require("eslint-config-prettier");

module.exports = [
  {
    files: ["**/*.{ts}"]
  },
  {
    languageOptions: {
        globals: globals.browser,
        parserOptions: {
            projectService: true,
            tsconfigRootDir: __dirname,
        },
    }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.strictTypeChecked,
  eslintConfigPrettier,
  { ignores: ["node_modules", "dist/**", "build/**", "webpack.config.js", "cocoa-typescript-config"] }
];
