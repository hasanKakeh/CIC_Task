import { Injectable } from '@angular/core';
import { Subject, share } from 'rxjs';
import { Employee } from 'src/app/models/employee';
@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  employee$ = new Subject<Employee>();
  employee: Employee;
  constructor() {}
  getEmployee$() {
    return this.employee$.asObservable().pipe();
  }
  addEmployee(employee: Employee) {
    this.employee = { ...employee, id: 0 };
    this.employee$.next(this.employee);
  }
  deleteEmployee() {
    this.employee = null;
    this.employee$.next(null);
  }
}
