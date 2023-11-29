import { IsString, IsInt } from 'class-validator'

export class CreateCustomerDto {
    @IsString()
    name: string;
    @IsInt()
    age: number;
    @IsString()
    email: string;
}
