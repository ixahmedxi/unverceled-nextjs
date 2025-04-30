import { defaultExclude, defineWorkspace } from 'vitest/config'

export default defineWorkspace([
  {
    extends: 'vitest.config.ts',
    test: {
      include: ['./src/**/*.{test,spec}.?(c|m)[jt]s?(x)'],
      exclude: [
        ...defaultExclude,
        './src/**/*.browser.{test,spec}.?(c|m)[jt]s?(x)',
      ],
    },
  },
  {
    extends: 'vitest.config.ts',
    test: {
      include: ['./src/**/*.browser.{test,spec}.?(c|m)[jt]s?(x)'],
      exclude: defaultExclude,
      browser: {
        enabled: true,
        provider: 'playwright',
        instances: [{ browser: 'chromium' }],
      },
    },
  },
])
