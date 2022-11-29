import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { EmployeeFormComponent } from './employee-form/employee-form.component';

@NgModule({
  declarations: [EmployeeComponent, EmployeeFormComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    SharedModule,
  ],
})
export class EmployeeModule {}