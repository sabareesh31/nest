import { Inject, Injectable, Scope, forwardRef } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Request } from 'express';
import { INQUIRER, REQUEST } from '@nestjs/core';
import { OrderService } from 'src/order/order.service';
// const { LazyModule } = await import('../lazy/lazy.module')
// const moduleRef = await this.LazyModuleLoader.load(() => LazyModule)

// const { LazyService } = await import('../lazy/lazy.service');
// const lazyService = moduleRef.get(LazyService);

@Injectable(
  // { scope: Scope.TRANSIENT }
  ) //long-hand provider registration 
export class ProductService {
  // constructor(@Inject(REQUEST) private req:Request){}
  constructor(
    // @Inject(INQUIRER) private parentClass: object,
    @Inject(forwardRef(() => OrderService)) private order: OrderService) { }


  // getRoot(message: string) {
  //   // console.log(`${this.parentClass?.constructor?.name}:${message}`)
  //   return 'ghjkjg'
  // }
  create(createProductDto: CreateProductDto) {
    return 'This action adds a new product';
  }

  findAll() {
    return `This action returns all product`;
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
