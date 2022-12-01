import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeRoutingModule } from './employee-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { ViewComponent } from './view/view.component';
import { EmployeeCardComponent } from './employee-card/employee-card.component';

@NgModule({
  declarations: [ EmployeeFormComponent, ViewComponent, EmployeeCardComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    SharedModule,
  ],
})
export class EmployeeModule {}
