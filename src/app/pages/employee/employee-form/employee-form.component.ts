import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from '../employee.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeFormComponent implements OnInit, OnDestroy {
  employeeForm: FormGroup;
  employee: Employee;
  subscription: Subscription;
  constructor(private _es: EmployeeService) {}

  ngOnInit(): void {
    this.initFormGroup();
    this.getEmployeeValue();
  }
  getEmployeeValue() {
    this.subscription = this._es.getEmployee$().subscribe((value) => {
      this.employee = value;
    });
    this.employee = this._es.employee;
    this.employeeForm.patchValue(this.employee);
  }
  initFormGroup() {
    this.employeeForm = new FormGroup({
      name: new FormControl(),
      age: new FormControl(),
      birthOfDate: new FormControl(),
      address: new FormControl(),
    });
  }
  submit() {
    this._es.addEmployee(this.employeeForm.value);
    this.employeeForm.markAsPristine();
  }
  reset() {
    this.employeeForm.reset({ ...this.employee });
  }
  deleteEmployee() {
    this._es.deleteEmployee();
    this.employeeForm.reset();
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
