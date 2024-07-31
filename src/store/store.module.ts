import { Module } from '@nestjs/common'

import { DatabaseModule } from '../database/database.module'

import { CustomerController } from './customers/customer.controller'
import { ProductController } from './products/product.controller'

@Module({
    imports: [DatabaseModule],
    controllers: [CustomerController, ProductController],
    providers: [],
    exports: [],
})
export class StoreModule {}
