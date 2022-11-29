import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextInputComponent } from './inputs/text-input/text-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTableComponent } from './data-table/data-table.component';
import { DateInputComponent } from './inputs/date-input/date-input.component';
import { NumberInputComponent } from './inputs/number-input/number-input.component';

@NgModule({
  declarations: [
    TextInputComponent,
    DataTableComponent,
    DateInputComponent,
    NumberInputComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [
    TextInputComponent,
    FormsModule,
    ReactiveFormsModule,
    DataTableComponent,
    DateInputComponent,
    NumberInputComponent,
  ],
})
export class SharedModule {}
