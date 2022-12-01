import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/models/employee';
import { ModalService } from 'src/app/shared/services/modal.service';
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewComponent implements OnInit {
  employees$: Observable<Employee[]>;
  constructor(private _es: EmployeeService, private _ms: ModalService) {}

  ngOnInit(): void {
    this.getEmployees();
  }
  openModal(content: any) {
    this._ms.open(content);
  }
  getEmployees() {
    this.employees$ = this._es.getEmployees$();
  }
}
