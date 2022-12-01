import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from '../employee.service';
import { Subscription } from 'rxjs';
import { ModalService } from 'src/app/shared/services/modal.service';
import { ValidationService } from 'src/app/shared/services/validation.service';

@Component({
  selector: 'employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeFormComponent implements OnInit {
  validationMessages = {
    name: { required: 'Name is reqiured' },
    age: { required: 'Age is reqiured' },
    birthOfDate: { required: 'Birth of date is reqiured' },
  };
  employeeForm: FormGroup;
  employee: Employee;
  formErrors: any = {};
  constructor(
    private _es: EmployeeService,
    private _ms: ModalService,
    private _vs: ValidationService
  ) {}

  ngOnInit(): void {
    this.initFormGroup();
    this.trackFormChanges();
  }

  initFormGroup() {
    this.employeeForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      age: new FormControl(null, Validators.required),
      birthOfDate: new FormControl(null, Validators.required),
      address: new FormControl(),
    });
  }
  trackFormChanges() {
    this.employeeForm.valueChanges.subscribe((value) => {
      this.logValidationMessages();
    });
  }
  logValidationMessages() {
    this.formErrors = this._vs.getValidationErrors(
      this.employeeForm,
      this.validationMessages
    );
  }
  submit() {
    if (this.employeeForm.valid) {
      this._es.addOrUpdateEmployee(this.employeeForm.value);
      this.close();
    } else {
      this.employeeForm.markAllAsTouched();
      this.employeeForm.markAsDirty();
      this.logValidationMessages();
    }
  }
  reset() {
    this.employeeForm.reset({ ...this.employee });
  }
  close() {
    this._ms.close();
  }
}
