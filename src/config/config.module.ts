import { DynamicModule, Module } from '@nestjs/common';
import { ConfigService } from './config.service'

@Module({})
export class ConfigModule {
    static register(options:Record<string,any>): DynamicModule {//accept any inputs
        return {
            module: ConfigModule,
            // providers: [ConfigService],
            providers:[{
                provide:'CONFIG_OPTIONS',
                useValue:options,
            },
            ConfigService
        ],
            exports: [ConfigService]
        }
    }
}
