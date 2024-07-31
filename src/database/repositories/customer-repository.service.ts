import { Injectable } from '@nestjs/common'

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
}
