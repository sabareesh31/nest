import { Global, Module } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerController } from './customer.controller';


@Global() //available everywhere out-of-the-box - db and helpers  modules
@Module({
  controllers: [CustomerController],
  providers: [CustomerService],
})
export class CustomerModule {
  constructor(private CustomerService: CustomerService) { }
}
  