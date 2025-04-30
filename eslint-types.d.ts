declare module '@eslint-community/eslint-plugin-eslint-comments/configs' {
  import type { Linter } from 'eslint'

  export const recommended: {
    rules: Linter.RulesRecord
  }
}
