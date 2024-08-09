import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

export default [
  {
    files: ["**/*.{mjs,cjs,jsx}"],
    ignores: [
      "node_modules/", // Ignore dependencies
      "dist/", // Ignore build output directory
      "build/", // Ignore build directory
      "public/", // Ignore public assets
      "**/*.css", // Ignore CSS files
      "**/*.html", // Ignore HTML files
      "**/*.json", // Ignore JSON files
      "**/*.ts", // Ignore TypeScript files (if applicable)
      "**/*.tsx", // Ignore TypeScript React files (if applicable)
    ],
  },
  {
    settings: {
      react: {
        version: "detect", // Automatically detect the version of React
      },
    },
  },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
];

