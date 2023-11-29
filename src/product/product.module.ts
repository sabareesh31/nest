import { Module, Scope, forwardRef } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { OrderService } from 'src/order/order.service';
import { OrderModule } from 'src/order/order.module';

@Module({
  // imports:[forwardRef(()=>OrderModule)],
  controllers: [ProductController],
  providers: [ProductService,OrderService],
//   providers:[{
//     provide:'CACHE_FILE',
//     useClass:ProductService,
//     scope:Scope.TRANSIENT
//   }]
})












export class ProductModule {}
