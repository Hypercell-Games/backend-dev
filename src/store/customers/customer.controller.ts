import { Controller, Get } from '@nestjs/common'

import { CustomerRepositoryService } from '../../database/repositories/customer-repository.service'

@Controller('customers')
export class CustomerController {
    constructor(private readonly customerRepositoryService: CustomerRepositoryService) {}

    @Get('/')
    public async getCustomers() {
        return await this.customerRepositoryService.getCustomers()
    }
}
