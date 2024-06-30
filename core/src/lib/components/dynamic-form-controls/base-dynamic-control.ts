import { Directive, inject } from "@angular/core";
import { FormGroup, ControlContainer } from "@angular/forms";
import { CONTROL_DATA } from "../../pipes/control-injector/control-data.token";

@Directive()
export class BaseDynamicControl {
    control = inject(CONTROL_DATA);
  
  get formGroup(): FormGroup {
    return this.parentFormGroup.control as FormGroup;
  }

  private parentFormGroup = inject(ControlContainer);
}