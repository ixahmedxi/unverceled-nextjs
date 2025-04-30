/** @type {import('@ianvs/prettier-plugin-sort-imports').PrettierConfig} */
const config = {
  semi: false,
  singleQuote: true,
  trailingComma: 'all',
  arrowParens: 'always',
  jsxSingleQuote: true,
  printWidth: 80,
  tabWidth: 2,
  plugins: [
    '@ianvs/prettier-plugin-sort-imports',
    'prettier-plugin-packagejson',
    'prettier-plugin-tailwindcss',
  ],
  importOrder: [
    '',
    '^react$',
    '^next(/.*)?$',
    '',
    '<TYPES>',
    '<TYPES>^[.]',
    '',
    '<BUILTIN_MODULES>',
    '',
    '<THIRD_PARTY_MODULES>',
    '',
    '^@/(.*)$',
    '',
    '^[./]',
    '',
    '^(?!.*[.]css$)[./].*$',
    '.css$',
  ],
}

export default config
