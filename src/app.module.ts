import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

import { IndexController } from './index.controller'
import { StoreModule } from './store/store.module'

@Module({
    imports: [ConfigModule.forRoot(), StoreModule],
    controllers: [IndexController],
})
export class AppModule {}
