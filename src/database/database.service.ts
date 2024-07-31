import { Injectable } from '@nestjs/common'
import { NodePgDatabase, drizzle } from 'drizzle-orm/node-postgres'
import * as pg from 'pg'

import * as schema from './schema'

@Injectable()
export class DatabaseService {
    private readonly database: NodePgDatabase<typeof schema>

    constructor(private readonly pgClient: pg.Client) {
        this.database = drizzle(pgClient, { schema, logger: false })
    }

    public async getDatabase(): Promise<NodePgDatabase<typeof schema>> {
        return this.database
    }

    public async getSchema(): Promise<typeof schema> {
        return schema
    }

    public async end(): Promise<void> {
        return this.pgClient.end()
    }
}
