import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, Query, 
  HttpException, 
  HttpStatus, 
  ParseUUIDPipe,
  ValidationPipe,
  UseGuards,
  UseInterceptors} from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { ParseIntPipe } from 'src/validation/validation.pipe';
import { AuthGuard } from 'src/auth/auth.guard';
import { Role } from 'src/roles/roles.decorator';
import { LoggingInterceptor } from 'src/logging/logging.interceptor';

@Controller('customer')
@UseGuards(AuthGuard)
@Role(['admin'])
@UseInterceptors(new LoggingInterceptor())
export class CustomerController {
  constructor(private readonly customerService: CustomerService) { }

  @Post()
  async create(@Body(new ValidationPipe()) createCustomerDto: CreateCustomerDto) {
    return this.customerService.create(createCustomerDto);
  }

  @Get()

  async findAll() {
    // return this.customerService.findAll();
    // return [];
    // throw new HttpException ('Forbidden',HttpStatus.FORBIDDEN)
    try {
      return this.customerService.findAll()
    } 
    catch (error) {
      throw new HttpException({
        status: HttpStatus.FORBIDDEN,
        error: 'no work',
      },
        HttpStatus.FORBIDDEN, {
        cause: error
      })
    }
  }

  // async  findAll() {**
  //   // return this.customerService.findAll();
  //   return [];
  // }

  // @Get(':id')
  // @HttpCode(201)
  // findOne(@Param() Param: any) {
  //   console.log(Param.id)
  //   return this.customerService.findOne(+Param.id);
  // }

  @Get('uuid')
  async findOne(@Param('uuid',new ParseUUIDPipe())uuid:string){
    this.customerService.findOne(uuid);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCustomerDto: UpdateCustomerDto) {
    return this.customerService.update(+id, updateCustomerDto);
  }

  @Delete(':id')
  remove(@Param('id',new ParseIntPipe()) id: string) {
    return this.customerService.remove(+id);
  }
}
