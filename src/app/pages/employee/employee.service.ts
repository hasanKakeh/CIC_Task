import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { Employee } from 'src/app/models/employee';
@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  employees$ = new BehaviorSubject<Employee[]>([
    {
      id: 0,
      name: 'hasan',
      age: 24,
      birthOfDate: new Date(),
      address: 'Cairo',
    },
    {
      id: 1,
      name: 'hasan',
      age: 24,
      birthOfDate: new Date(),
      address: 'Cairo',
    },
  ]);
  id: number = 2;
  constructor() {}
  getEmployees$() {
    return this.employees$.asObservable();
  }
  addOrUpdateEmployee(employee: Employee) {
    const employees = this.employees$.getValue();
    const index = employees.findIndex((e) => e.id === employee.id);

    if (index === -1) {
      this.employees$.next([
        ...employees,
        { ...employee, id: this.getNewId() },
      ]);
      return;
    }
    const temp = [...employees];
    temp[index] = employee;
    this.employees$.next(temp);
  }
  getNewId() {
    return this.id++;
  }
  deleteEmployee(id: number) {
    const temp = this.employees$.getValue().filter((e) => e.id !== id);
    this.employees$.next(temp);
  }
}
