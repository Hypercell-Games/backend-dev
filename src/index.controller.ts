import { Controller, Get } from '@nestjs/common'

@Controller('/')
export class IndexController {
    @Get()
    public getIndex(): string {
        return '<h1>Welcome to the SuperStore</h1>'
    }
}
