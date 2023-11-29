import { Injectable ,ArgumentsHost, OnApplicationShutdown} from '@nestjs/common';
import { CreateLazyDto } from './dto/create-lazy.dto';
import { UpdateLazyDto } from './dto/update-lazy.dto';
import { LazyModuleLoader } from '@nestjs/core';




@Injectable()
export class LazyService implements OnApplicationShutdown{
  onApplicationShutdown(signal?: string) {
    console.log(`-----------`)
    console.log(signal)
   
  }
  constructor(private lazy: LazyModuleLoader) { }
  create(createLazyDto: CreateLazyDto) {  

    return 'This action adds a new lazy';
  }

  findAll() {
    return `This action returns all lazy`;
  }

  findOne(id: number) {
    return `This action returns a #${id} lazy`;
  }

  update(id: number, updateLazyDto: UpdateLazyDto) {
    return `This action updates a #${id} lazy`;
  }

  remove(id: number) {
    return `This action removes a #${id} lazy`;
  }
}
