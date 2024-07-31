import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

@Injectable()
export class PostgresConfigService {
    constructor(private config: ConfigService) {}

    public get host(): string {
        return this.config.getOrThrow('POSTGRES_HOST')
    }

    public get port(): number {
        return parseInt(this.config.getOrThrow('POSTGRES_PORT'))
    }

    public get user(): string {
        return this.config.getOrThrow('POSTGRES_USER')
    }

    public get password(): string {
        return this.config.getOrThrow('POSTGRES_PASSWORD')
    }

    public get database(): string {
        return this.config.getOrThrow('POSTGRES_DB')
    }
}
