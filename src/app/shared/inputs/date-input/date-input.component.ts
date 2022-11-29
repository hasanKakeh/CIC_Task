import {
  Component,
  forwardRef,
  Input,
  ChangeDetectionStrategy,
  ViewChild,
} from '@angular/core';
import {
  ControlContainer,
  ControlValueAccessor,
  FormControl,
  FormControlDirective,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  selector: 'date-input',
  template: ` <div class="form-group" [ngClass]="class ? class : ''">
    <label class="form-label" *ngIf="label">{{ label }}</label>
    <input
      class="form-control"
      [ngClass]="formControlError ? 'error' : ''"
      [placeholder]="placeholder"
      type="date"
      [id]="formControlName"
      [name]="formControlName"
      [formControl]="control"
      #ref
    />
    <span class="form-error" *ngIf="formControlError">
      {{ formControlError }}
    </span>
  </div>`,
  styleUrls: ['./date-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DateInputComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DateInputComponent implements ControlValueAccessor {
  @ViewChild(FormControlDirective, { static: true })
  formControlDirective: FormControlDirective;
  @Input() formControlName: string;
  @Input() class: any;
  @Input() placeholder: string;
  @Input() formControlError: string;
  @Input() label: string;
  get control() {
    return this.controlContainer.control.get(
      this.formControlName
    ) as FormControl;
  }

  constructor(private controlContainer: ControlContainer) {}

  registerOnTouched(fn: any): void {
    this.formControlDirective.valueAccessor.registerOnTouched(fn);
  }

  registerOnChange(fn: any): void {
    this.formControlDirective.valueAccessor.registerOnChange(fn);
  }

  writeValue(obj: any): void {
    this.formControlDirective.valueAccessor.writeValue(obj);
  }
  setDisabledState(isDisabled: boolean): void {
    this.formControlDirective.valueAccessor.setDisabledState(isDisabled);
  }
}
