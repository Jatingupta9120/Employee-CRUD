import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto, getEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';

@Injectable()
export class employeeRepository {
  private employees;
  private autoIncrementId;
  constructor() {
    (this.employees = []), (this.autoIncrementId = 1);
  }
  async createEmployees(createEmployee: CreateEmployeeDto) {
    const employee = {
      id: this.autoIncrementId++,
      name: createEmployee.name,
      gender: createEmployee.gender,
      age: createEmployee.age,
    };
    return this.employees.push(employee);
  }

  async getEmployees() {
    return this.employees;
  }

  async updateEmployee(updateEmployeeBody: UpdateEmployeeDto, id: string) {
    const employeeIndex = this.employees.findIndex((i) => i.id == id);
    console.log(employeeIndex);
    if (employeeIndex == -1) {
      throw new Error(' Employee not found');
    }
    this.employees[employeeIndex] = {
      ...this.employees[employeeIndex],
      ...updateEmployeeBody,
    };
    return this.employees[employeeIndex];
  }

  async getEmployeeById(getEmployeeById: getEmployeeDto) {
    const employeeById = this.employees.find((i) => {
      return i.id == getEmployeeById.id;
    });
    if (!employeeById) {
      throw new Error('not found');
    }
    return employeeById;
  }

  async deleteEmployeeById(deleteEmployee: getEmployeeDto) {
    const index = await this.employees.findIndex((i) => {
      return i.id == deleteEmployee.id;
    });

    if (index !== -1) {
      const deletedEmployee = this.employees.splice(index, 1);
      console.log('Employee deleted:', deletedEmployee[0]);
      return 'Deleted Successfully';
    } else {
      console.log('Employee not found.');
    }
  }
}
