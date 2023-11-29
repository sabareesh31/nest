import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { validate } from 'class-validator';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class ValidationPipe implements PipeTransform<any> {
  async transform(value: any, { metadata }: any) {
    if (!metadata || !this.tovalidate(metadata)) {
      return value;
    }
    const obj = plainToInstance(metadata, value);
    const err = await validate(obj);
    if (err.length > 0) {
      throw new BadRequestException('validation faild')
    }
    return value
  }
  private tovalidate(metadata: Function): boolean {
    const types: Function[] = [String, Boolean, Number, Array, Object];
    return !types.includes(metadata)
    // throw new Error('Method not implemented.');
  }
}

Injectable()
export class ParseIntPipe implements PipeTransform<string, number>{
  transform(value: string, metadata: ArgumentMetadata): number {
    const val = parseInt(value, 10);
    if (isNaN(val)) {
      throw new Error('Method not implemented.');
    }
    val;
    return
  }

}