import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeCardComponent implements OnInit {
  @Input() employee: Employee;
  remove: boolean = false;
  constructor(private _es: EmployeeService) {}

  ngOnInit(): void {}
  deleteEmployee() {
    this._es.deleteEmployee(this.employee.id);
  }
}
