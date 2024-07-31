import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import * as pg from 'pg'

import { DatabaseService } from './database.service'
import { PostgresConfigService } from './postgres-config.service'
import { CustomerRepositoryService } from './repositories/customer-repository.service'
import { OrderItemRepositoryService } from './repositories/order-item-repository.service'
import { OrderRepositoryService } from './repositories/order-repository.service'
import { ProductRepositoryService } from './repositories/product-repository.service'

const PgClientFactory = {
    provide: pg.Client,
    inject: [PostgresConfigService],
    useFactory: async (config: PostgresConfigService): Promise<pg.Client> => {
        const client = new pg.Client({
            host: config.host,
            port: config.port,
            user: config.user,
            password: config.password,
            database: config.database,
        })
        await client.connect()

        return client
    },
}

@Module({
    imports: [ConfigModule],
    providers: [
        PostgresConfigService,
        PgClientFactory,
        DatabaseService,
        CustomerRepositoryService,
        OrderItemRepositoryService,
        OrderRepositoryService,
        ProductRepositoryService,
    ],
    exports: [CustomerRepositoryService, OrderItemRepositoryService, OrderRepositoryService, ProductRepositoryService],
})
export class DatabaseModule {}
