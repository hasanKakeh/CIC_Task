import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { ModalService } from 'src/app/shared/services/modal.service';
import { FormGroup, FormControl } from '@angular/forms';
import { CitiesService } from '../cities.service';
import { City } from 'src/app/models/city';
import { Observable } from 'rxjs';

@Component({
  selector: 'view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewComponent implements OnInit {
  @ViewChild('cityForm') cityForm: TemplateRef<unknown>;
  formGroup: FormGroup;
  columns: any = [
    { name: 'Country', id: 'country' },
    { name: 'City', id: 'name' },
    { name: 'Code', id: 'code' },
  ];
  data: Observable<City[]>;
  city: City;
  constructor(private _ms: ModalService, private _cs: CitiesService) {}

  ngOnInit(): void {
    this.initFormGroup();
    this.data = this._cs.getCities$();
  }

  openCityModal(data: City) {
    this.city = data;
    this._ms.open(this.cityForm);
  }
  initFormGroup() {
    this.formGroup = new FormGroup({
      search: new FormControl(),
    });
  }
  onClickActionTable({ action, data }: { action: string; data: City }) {
    switch (action) {
      case 'edit':
        this.openCityModal(data);
        break;
      case 'delete':
        this._cs.delete(data.id);
        break;
    }
  }
}
