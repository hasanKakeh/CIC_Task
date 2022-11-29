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
  selector: 'text-input',
  template: ` <div class="form-group" [ngClass]="class ? class : ''">
    <label class="form-label" *ngIf="label">{{ label }}</label>
    <input
      class="form-control"
      [ngClass]="formControlError ? 'error' : ''"
      [placeholder]="placeholder || label"
      type="text"
      [id]="formControlName"
      [name]="formControlName"
      [formControl]="control"
      [type]="isPassword ? 'password' : 'text'"
    />
    <span class="form-error" *ngIf="formControlError">
      {{ formControlError }}
    </span>
  </div>`,
  styleUrls: ['./text-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextInputComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextInputComponent implements ControlValueAccessor {
  @ViewChild(FormControlDirective, { static: true })
  formControlDirective: FormControlDirective;
  @Input() class: any;
  @Input() label: string;
  @Input() placeholder: string;
  @Input() formControlError: string;
  @Input() formControlName: string;
  @Input() isPassword: boolean = false;
  get control() {
    return this.controlContainer.control.get(
      this.formControlName
    ) as FormControl;
  }
  constructor(private controlContainer: ControlContainer) {}

  ngOnInit(): void {}
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
