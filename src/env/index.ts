import { z } from 'zod'

const envSchema = z.object({
  VITE_REACT_APP_COIN_API_KEY: z.string(),
})

const _env = envSchema.safeParse(import.meta.env)

if (_env.success === false) {
  console.error('⚠️ Invalid environment variable', _env.error.format())
  throw new Error('Invalid environment variable')
}

export const env = _env.data
