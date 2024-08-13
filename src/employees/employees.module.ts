import { Module } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { employeeRepository } from './employees.repository';
import { employeeController } from './employees.controller';

@Module({
  controllers: [employeeController],
  providers: [EmployeesService, employeeRepository],
})
export class EmployeesModule {}
