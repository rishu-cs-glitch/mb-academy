import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import js from "@eslint/js";
import unusedImports from "eslint-plugin-unused-imports";
import importPlugin from "eslint-plugin-import";
import prettier from "eslint-plugin-prettier";
import pluginQuery from "@tanstack/eslint-plugin-query";

const eslintConfig = defineConfig([
  ...nextVitals,
  js.configs.recommended,

  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
    plugins: {
      // '@typescript-eslint': typescriptEslint, // <-- Removed
      "unused-imports": unusedImports,
      import: importPlugin,
      // 'jsx-a11y': jsxA11y, // <-- REMOVE THIS
      prettier: prettier,
      // 'react-hooks': reactHooks, // <-- Removed
      "@tanstack/query": pluginQuery,
    },
    rules: {
      // Your rules are all fine. They will configure the
      // plugins that Next.js loaded for you.
      "react-hooks/set-state-in-effect": "off",
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "jsx-a11y/alt-text": "warn",
      "jsx-a11y/anchor-is-valid": "warn",
      "jsx-a11y/no-autofocus": "warn",
      "@typescript-eslint/no-explicit-any": "off",
      "unused-imports/no-unused-imports": "error",
      "@typescript-eslint/consistent-type-imports": "error",
      "unused-imports/no-unused-vars": [
        "error",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],
      "prettier/prettier": "error",
      "no-multiple-empty-lines": ["error", { max: 2, maxBOF: 1, maxEOF: 1 }],
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "linebreak-style": ["error", "unix"],
      "no-unused-vars": "off",
      "no-undef": "off",
    },
  },
]);

export default eslintConfig;
