import { Module, forwardRef } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { ProductService } from 'src/product/product.service';
import { ProductModule } from 'src/product/product.module';

@Module({
  imports:[forwardRef(()=> ProductModule)],
  controllers: [OrderController],
  providers: [OrderService,ProductService],
})
export class OrderModule {}
