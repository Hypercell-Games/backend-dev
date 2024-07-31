import { Injectable } from '@nestjs/common'
import { eq } from 'drizzle-orm'

import { DatabaseService } from '../database.service'
import { OrderItem } from '../models'
import { orderItemsTable } from '../schema'

@Injectable()
export class OrderItemRepositoryService {
    constructor(private readonly databaseService: DatabaseService) {}

    public async getOrderItemsByOrderId(orderId: number): Promise<OrderItem[]> {
        const db = await this.databaseService.getDatabase()

        return await db.select().from(orderItemsTable).where(eq(orderItemsTable.orderId, orderId)).execute()
    }
}
