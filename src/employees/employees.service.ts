import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto, getEmployeeDto } from './dto/create-employee.dto';
import { employeeRepository } from './employees.repository';
import { UpdateEmployeeDto } from './dto/update-employee.dto';

@Injectable()
export class EmployeesService {
  constructor(private employeeRepository: employeeRepository) {}

  async createEmployees(createEmployees: CreateEmployeeDto) {
    return this.employeeRepository.createEmployees(createEmployees);
  }

  async getAllEmployees() {
    return this.employeeRepository.getEmployees();
  }

  async getEmployeeById(getEmployeeById: getEmployeeDto) {
    return this.employeeRepository.getEmployeeById(getEmployeeById);
  }

  async deleteEmployees(deleteEmployee: getEmployeeDto) {
    return this.employeeRepository.deleteEmployeeById(deleteEmployee);
  }

  async updateEmployee(updateEmployee: UpdateEmployeeDto, id: string) {
    return this.employeeRepository.updateEmployee(updateEmployee, id);
  }
}
