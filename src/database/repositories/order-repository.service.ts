import { Injectable } from '@nestjs/common'
import { eq } from 'drizzle-orm'

import { DatabaseService } from '../database.service'
import { Order } from '../models'
import { ordersTable } from '../schema'

@Injectable()
export class OrderRepositoryService {
    constructor(private readonly databaseService: DatabaseService) {}

    public async getOrdersByCustomerId(customerId: number): Promise<Order[]> {
        const db = await this.databaseService.getDatabase()

        return await db.select().from(ordersTable).where(eq(ordersTable.customerId, customerId)).execute()
    }
}
