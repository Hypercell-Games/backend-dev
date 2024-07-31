import { defineConfig } from 'drizzle-kit'
import * as process from 'node:process'

export default defineConfig({
    schema: './src/database/schema.ts',
    dialect: 'postgresql',
    migrations: {
        prefix: 'supabase',
    },
    dbCredentials: {
        host: process.env.POSTGRES_HOST!,
        port: parseInt(process.env.POSTGRES_PORT!),
        database: process.env.POSTGRES_DB!,
        user: process.env.POSTGRES_USER!,
        password: process.env.POSTGRES_PASSWORD!,
        ssl: false,
    },
    verbose: true,
    strict: true,
})
