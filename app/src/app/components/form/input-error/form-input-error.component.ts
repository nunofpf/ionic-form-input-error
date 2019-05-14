import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-form-input-error',
    templateUrl: './form-input-error.component.html',
    styleUrls: ['./form-input-error.component.scss']
})
export class FormInputErrorComponent {
    @Input() form: FormGroup;
    @Input() formInput: string;
    formInputError: string;

    constructor() {

    }

    formInputHasErrors() {
        if (this.form.controls[this.formInput]) {
            const errors = this.form.controls[this.formInput].errors;
            for (const errorName in errors) {
                if (errors[errorName]) {
                    switch (errorName) {
                        case 'required':
                            return false;
                        case 'minlength':
                            this.formInputError =
                                `Must be at least ${this.form.controls[this.formInput].errors.minlength.requiredLength} characters long.`;
                            return true;
                        case 'email':
                            this.formInputError = 'Please enter an email address';
                            return true;
                        default:
                            this.formInputError = this.form.controls[this.formInput].errors[errorName];
                            return true;
                    }
                }
            }
            this.formInputError = '';
            return false;
        }
    }
}

