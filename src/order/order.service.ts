import { Inject, Injectable, OnModuleInit, forwardRef } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { ProductService } from 'src/product/product.service';
import { ModuleRef } from '@nestjs/core';

@Injectable()
export class OrderService implements OnModuleInit{
  // constructor(@Inject(forwardRef(() => ProductService)) private product: ProductService) { }
  private service: ProductService
  constructor(private productRef: ModuleRef) { }

  // async onit(){
  //   const a =this.service =await this.productRef.resolve(ProductService)
  //   console.log(a)
  // }




  // async onModuleInit():Promise<void>{
  //   await this.findAll();
  // }

  onModuleInit() {
  //  const b= this.service = this.productRef.get(ProductService, { strict: false })
 
   console.log("module as init")
  }

  create(createOrderDto: CreateOrderDto) {
    return 'This action adds a new order';
  }

  findAll() {
    return `This action returns all order`;
  }

  findOne(id: number) {
    return `This action returns a #${id} order`;
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
