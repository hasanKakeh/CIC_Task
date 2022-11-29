import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from './employee.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeComponent implements OnInit {
  employee: Employee;
  subscription: Subscription;

  constructor(private _es: EmployeeService) {}

  ngOnInit(): void {
    this.getEmployeeValue();
  }
  getEmployeeValue() {
    this.subscription = this._es.getEmployee$().subscribe((value) => {
      this.employee = value;
    });
    this.employee = this._es.employee;
  }
}
