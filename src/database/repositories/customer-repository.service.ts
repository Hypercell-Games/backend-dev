import { Injectable } from '@nestjs/common'
import { eq } from 'drizzle-orm'

import { DatabaseService } from '../database.service'
import { Customer } from '../models'
import { customersTable } from '../schema'

@Injectable()
export class CustomerRepositoryService {
    constructor(private readonly databaseService: DatabaseService) {}

    public async getCustomers(): Promise<Customer[]> {
        const db = await this.databaseService.getDatabase()

        return await db.select().from(customersTable).execute()
    }

    public async getCustomerById(customerId: number): Promise<Customer> {
        const db = await this.databaseService.getDatabase()
        const customers = await db.select().from(customersTable).where(eq(customersTable.id, customerId)).execute()

        if (customers.length === 0) {
            throw new Error(`Customer not found | Id: ${customerId}`)
        }
        return customers[0] as Customer
    }
}
