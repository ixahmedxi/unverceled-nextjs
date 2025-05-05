import comments from '@eslint-community/eslint-plugin-eslint-comments/configs'
import react from '@eslint-react/eslint-plugin'
import { FlatCompat } from '@eslint/eslintrc'
import js from '@eslint/js'
import prettier from 'eslint-config-prettier'
import { flatConfigs as importX } from 'eslint-plugin-import-x'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import node from 'eslint-plugin-n'
import { configs as reactHooks } from 'eslint-plugin-react-hooks'
import security from 'eslint-plugin-security'
import unicorn from 'eslint-plugin-unicorn'
import globals from 'globals'
import { config as defineConfig, configs as tseslint } from 'typescript-eslint'

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
})

/** @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.ConfigArray} */
export default defineConfig(
  {
    ignores: ['node_modules', '.next', 'cloudflare-env.d.ts'],
  },

  js.configs.recommended,
  ...tseslint.strictTypeChecked,
  ...tseslint.stylisticTypeChecked,
  importX.recommended,
  importX.typescript,
  comments.recommended,
  // eslint-disable-next-line import-x/no-named-as-default-member
  security.configs.recommended,
  unicorn.configs.recommended,
  node.configs['flat/recommended'],

  ...compat.config({
    extends: ['plugin:@next/next/recommended'],
  }),
  react.configs['recommended-type-checked'],
  reactHooks.recommended,
  jsxA11y.flatConfigs.strict,

  ...compat.config({ extends: ['plugin:drizzle/all'] }),

  {
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    languageOptions: {
      ...jsxA11y.flatConfigs.strict.languageOptions,
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        projectService: true,
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.node,
        ...globals.builtin,
        ...globals.browser,
      },
    },
    settings: {
      node: {
        tryExtensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      },
    },
  },

  {
    files: ['**/*.cjs', '**/*.cts'],
    languageOptions: {
      sourceType: 'commonjs',
    },
  },

  {
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],

      '@typescript-eslint/consistent-type-imports': [
        'warn',
        {
          prefer: 'type-imports',
          fixStyle: 'separate-type-imports',
          disallowTypeAnnotations: false,
        },
      ],

      '@typescript-eslint/no-misused-promises': [
        'error',
        { checksVoidReturn: { attributes: false } },
      ],

      '@typescript-eslint/no-unnecessary-condition': [
        'error',
        {
          allowConstantLoopConditions: true,
        },
      ],

      '@typescript-eslint/consistent-type-exports': [
        'error',
        { fixMixedExportsWithInlineTypeSpecifier: true },
      ],

      'unicorn/prevent-abbreviations': [
        'error',
        {
          allowList: {
            env: true,
            e: true,
            ctx: true,
            req: true,
            res: true,
            arg: true,
            args: true,
            opts: true,
            prop: true,
            props: true,
            util: true,
            utils: true,
          },
        },
      ],

      'react-hooks/react-compiler': 'error',
      'n/exports-style': ['error', 'exports'],
      'n/no-missing-import': [
        'error',
        {
          ignoreTypeImport: true,
        },
      ],
    },
  },

  prettier,
)
