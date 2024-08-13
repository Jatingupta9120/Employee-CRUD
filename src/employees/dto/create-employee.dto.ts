import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateEmployeeDto {
  name: string;
  age: number;
  gender: string;
}
export class getEmployeeDto {
  @IsString()
  @IsNotEmpty()
  id: string;
}
