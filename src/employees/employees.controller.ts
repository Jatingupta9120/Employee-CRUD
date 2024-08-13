import { CreateEmployeeDto, getEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { EmployeesService } from './employees.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Injectable,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

@Injectable()
@Controller('employees')
export class employeeController {
  constructor(private employeesService: EmployeesService) {}
  @Post()
  @HttpCode(HttpStatus.CREATED)
  async CreateEmployeeDto(@Body() employeeDto: CreateEmployeeDto) {
    return this.employeesService.createEmployees(employeeDto);
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async getEmployeeById(@Param() getEmployeeById: getEmployeeDto) {
    return this.employeesService.getEmployeeById(getEmployeeById);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  async getAllEmployees() {
    return this.employeesService.getAllEmployees();
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  async deleteEmployee(@Param() deleteEmployee: getEmployeeDto) {
    return this.employeesService.deleteEmployees(deleteEmployee);
  }

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  async updateEmployee(
    @Body() updateEmployee: UpdateEmployeeDto,
    @Param('id') id: string,
  ) {
    return await this.employeesService.updateEmployee(updateEmployee, id);
  }
}
