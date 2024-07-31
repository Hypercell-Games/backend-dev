import { Controller, Get } from '@nestjs/common'

import { ProductRepositoryService } from '../../database/repositories/product-repository.service'

@Controller('products')
export class ProductController {
    constructor(private readonly productRepositoryService: ProductRepositoryService) {}

    @Get('/')
    public async getProducts() {
        return await this.productRepositoryService.getProducts()
    }
}
