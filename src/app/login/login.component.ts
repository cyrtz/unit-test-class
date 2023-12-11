import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z]).{6,}$')]);


  getEmailErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  getPasswordErrorMessage() {
    if (this.password.hasError('required')) {
      return 'You must enter value';
    }

    return this.password.hasError('password') ? 'Not a valid password' : '';

  }
}
