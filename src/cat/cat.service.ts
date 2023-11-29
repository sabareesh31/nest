import { Inject, Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { Cat } from './cat.interface';
import { Connection } from 'src/connection/connection';


@Injectable()
export class CatService {
  // constructor(@Inject('CONNECTION') connection: Connection) {}
  // constructor(@Inject('ASYNC_CONNECTION') connection: Connection) {


  // }
  private readonly cats: Cat[] = []
  create(createCatDto: CreateCatDto) {
    return 'This action adds a new cat';
  }

  findAll(): Cat[] {
    // return `This action returns all cat`;
    return this.cats
  }

  findOne(id: number) {
    return `This action returns a #${id} cat`;
  }

  update(id: number, updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat`;
  }

  remove(id: number) {
    return `This action removes a #${id} cat`;
  }
}
