import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomerModule } from './customer/customer.module';
import { CustomerController } from './customer/customer.controller'
import { MiddlewareMiddleware } from './middleware/middleware.middleware'
import { CatModule } from './cat/cat.module';
import { Connection } from './connection/connection';
import { ConfigService } from './config/config.service';
import { ConfigModule } from './config/config.module';
import { Database } from './database/database';
import { ProductModule } from './product/product.module';
import { ProductService } from './product/product.service';
import { OrderModule } from './order/order.module';
import { OrderService } from './order/order.service';
import { LazyModule } from './lazy/lazy.module';

const congif = {
  provide: ConfigService,
  useClass:
    process.env.NODE_ENV = 'devlopment'
  // ? DevlopmentConfigService
  // : ProductionConfigService
}

@Module({
  imports: [CustomerModule, CatModule, ConfigModule, ProductModule, OrderModule, LazyModule], //static method called register
  controllers: [AppController],
  providers: [AppService, Connection, ConfigService,Database, ProductService, OrderService,
  // {
  //   provide: 'ASYNC_CONNECTION',
  //   useFactory: async () => {
  //     // const connection = await createConnection(Database);
  //     // return connection
  //   }
  // }, Database
]

})

export class AppModule implements NestModule {

  
  configure(consumer: MiddlewareConsumer) {
    (consumer: MiddlewareConsumer) => {
      consumer
        .apply(MiddlewareMiddleware)
        // .apply(cors(),helmet(),logger)
        .exclude(
          { path: 'customer', method: RequestMethod.GET },
          { path: 'customer', method: RequestMethod.POST },
          'customer/(.*)',
        )
        // .forRoutes('customer')
        // .forRoutes({ path: 'customer', method: RequestMethod.ALL }) //crud mothod and any one operation using that ine eg:GET
        .forRoutes(CustomerController)
    }
  }
}


