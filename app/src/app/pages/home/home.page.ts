import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PasswordValidation } from 'src/app/validators/pw-validation';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group(
      {
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required]
      }, {
        validator: [
          PasswordValidation.matchPassword
        ]
      });
  }

  /**
   * Check if form input is required
   * @param formInput Form control
   */
  formInputIsRequired(formInput: string) {
    if (this.form.controls[formInput]) {
      if (this.form.controls[formInput].hasError('required')) {
        return true;
      }
    }
    return false;
  }
}
