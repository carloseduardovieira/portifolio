import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class CustomValidators {
  controlValidator(controlRegexp: RegExp): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const forbidden = controlRegexp.test(control.value);
      return forbidden ? { forbiddenName: { value: control.value } } : null;
    };
  }
}
