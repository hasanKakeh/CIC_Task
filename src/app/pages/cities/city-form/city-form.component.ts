import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { City } from 'src/app/models/city';
import { ModalService } from 'src/app/shared/services/modal.service';
import { ValidationService } from 'src/app/shared/services/validation.service';
import { CitiesService } from '../cities.service';
@Component({
  selector: 'city-form',
  templateUrl: './city-form.component.html',
  styleUrls: ['./city-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CityFormComponent implements OnInit {
  @Input() city: City;
  validationMessages = {
    country: { required: 'Country is required' },
    name: { required: 'City is required' },
  };
  cityForm: FormGroup;
  formErrors: any = {};
  isEdit: boolean = false;

  constructor(
    private _vs: ValidationService,
    private _ms: ModalService,
    private _cs: CitiesService
  ) {}

  ngOnInit(): void {
    this.initFormGroup();
    this.trackFormChanges();
    if (this.city) {
      this.isEdit = true;
      this.setFormValue(this.city);
    }
  }
  initFormGroup() {
    this.cityForm = new FormGroup({
      country: new FormControl(null, Validators.required),
      name: new FormControl(null, Validators.required),
      code: new FormControl(),
    });
  }
  setFormValue(value: any) {
    this.cityForm.patchValue({ ...value });
  }
  trackFormChanges() {
    this.cityForm.valueChanges.subscribe((value) => {
      this.logValidationMessages();
    });
  }
  logValidationMessages() {
    this.formErrors = this._vs.getValidationErrors(
      this.cityForm,
      this.validationMessages
    );
  }
  submit() {
    console.log(this.cityForm.value);
    if (this.cityForm.valid) {
      const city = this.isEdit
        ? { id: this.city.id, ...this.cityForm.value }
        : this.cityForm.value;
      this._cs.addOrUpdateCity(city);
      this.close();
    } else {
      this.cityForm.markAllAsTouched();
      this.cityForm.markAsDirty();
      this.logValidationMessages();
    }
  }
  close() {
    this._ms.close();
  }
}
