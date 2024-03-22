import { AbstractControl, ValidationErrors } from '@angular/forms';

export function stringOrNumberValidator(
  control: AbstractControl
): ValidationErrors | null {
  const value = control.value;

  if (value != null) {
    const regex = /^[a-zA-Z0-9\s]+$/;
    return !value || regex.test(value) ? null : { stringOrNumber: true };
  }

  return null;
}
