import { Injectable } from '@nestjs/common'

import { DatabaseService } from '../database.service'
import { Product } from '../models'
import { productsTable } from '../schema'

@Injectable()
export class ProductRepositoryService {
    constructor(private readonly databaseService: DatabaseService) {}

    public async getProducts(): Promise<Product[]> {
        const db = await this.databaseService.getDatabase()

        return await db.select().from(productsTable).execute()
    }
}
