import {
  Component,
  forwardRef,
  Input,
  ChangeDetectionStrategy,
  ViewChild,
  ChangeDetectorRef,
} from '@angular/core';
import {
  ControlContainer,
  ControlValueAccessor,
  FormControl,
  FormControlDirective,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  selector: 'number-input',
  template: ` <div
    class="form-group"
    [class.disabled]="control.disabled"
    [ngClass]="class ? class : ''"
  >
    <label class="form-label" *ngIf="label">{{ label }}</label>
    <input
      class="form-control"
      [ngClass]="[formControlError ? 'error' : '']"
      [placeholder]="placeholder || label"
      type="number"
      [id]="formControlName"
      [name]="formControlName"
      [formControl]="control"
      [min]="minValue"
      (keypress)="minValue == 0 ? checkIfPositive($event) : ''"
    />

    <span class="form-error" *ngIf="formControlError">
      {{ formControlError }}
    </span>
  </div>`,
  styleUrls: ['./number-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NumberInputComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NumberInputComponent implements ControlValueAccessor {
  @ViewChild(FormControlDirective, { static: true })
  formControlDirective: FormControlDirective;

  @Input() formControlName: string;
  @Input() class: any;
  @Input() placeholder: string;
  @Input() formControlError: string;
  @Input() label: string;

  @Input() minValue: number = null;
  get control() {
    return this.controlContainer.control.get(
      this.formControlName
    ) as FormControl;
  }
  constructor(
    private controlContainer: ControlContainer,
    private _cdr: ChangeDetectorRef
  ) {}

  checkIfPositive(e: KeyboardEvent) {
    if (e.key === '-') return false;
    return true;
  }
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
    this._cdr.markForCheck();
    this.formControlDirective.valueAccessor.setDisabledState(isDisabled);
  }
}
