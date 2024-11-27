import js from '@eslint/js';
import globals from 'globals';
import typescript from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

export default [
  // Base config for all JavaScript/TypeScript files
  {
    ignores: ['dist/**', 'node_modules/**'],
    plugins: {
      '@typescript-eslint': typescript,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...typescript.configs.recommended.rules,
    },
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
  },

  // Server-side TypeScript config
  {
    files: ['src/server/**/*.ts'],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      globals: {
        console: 'readonly',
        process: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
      },
    },
  },

  // Client-side TypeScript config
  {
    files: ['src/client/**/*.ts', 'src/client/**/*.tsx'],
    languageOptions: {
      parserOptions: {
        jsx: true,
      },
      globals: {
        ...globals.browser,
        React: 'readonly',
      },
    },
  },
];
