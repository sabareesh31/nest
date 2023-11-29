import { Injectable } from '@nestjs/common';
import { ProductService } from './product/product.service';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
// constructor(private product:ProductService){}
//   getRoot():string{
//     const a = this.product.getRoot(`My name is sabareesh`)
//     console.log(a);
//     return 'hello world!'
//   }
}
