import { createEnv } from '@t3-oss/env-nextjs'
import { type } from 'arktype'

export const env = createEnv({
  shared: {
    NODE_ENV: type("'development' | 'production' | 'test' | undefined").pipe(
      (v) => v ?? 'development',
    ),
    PORT: type('string.integer | undefined').pipe((v) => v ?? 3000),
  },
  server: {},
  client: {},
  experimental__runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT,
  },
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  emptyStringAsUndefined: true,
})
