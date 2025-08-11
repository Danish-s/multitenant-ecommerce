import { generateTypes } from 'payload/dist/bin/payload'
import config from '../src/payload.config'

generateTypes({
  configPath: './src/payload.config.ts',
  config,
})
