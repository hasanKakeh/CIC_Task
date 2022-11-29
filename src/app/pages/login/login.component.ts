import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { ValidationService } from 'src/app/shared/services/validation.service';
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  validationMessages: any = {
    userName: { required: 'User name is required' },
    password: {
      required: 'Password is required',
      minlength: 'Password must be 5 char at least',
    },
  };
  loginForm: FormGroup;
  formErrors: any = {};
  constructor(private _vs: ValidationService, private _us: UserService) {}

  ngOnInit(): void {
    this.initLoginForm();
    this.trackFormChanges();
  }
  initLoginForm() {
    this.loginForm = new FormGroup({
      userName: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
      ]),
    });
  }
  trackFormChanges() {
    this.loginForm.valueChanges.subscribe((value) => {
      this.logValidationMessages();
    });
  }
  logValidationMessages() {
    this.formErrors = this._vs.getValidationErrors(
      this.loginForm,
      this.validationMessages
    );
  }

  submit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      this._us.login(this.loginForm.value.userName);
    } else {
      this.loginForm.markAllAsTouched();
      this.loginForm.markAsDirty();
      this.logValidationMessages();
    }
  }
}
