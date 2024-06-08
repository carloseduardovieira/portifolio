import { CONTROL_DATA } from './../../../pipes/control-injector/control-data.token';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlContainer, FormGroup, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'ben-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <ng-container [formGroup]="formGroup">
      <input 
        [formControlName]="control.controlKey"
        [value]="control.config.value" 
        [id]="control.config.id" 
        [type]="control.config.type">
    </ng-container>
              `,
  styles: ``,
})
export class BenInputComponent {
  control = inject(CONTROL_DATA)

  get formGroup(): FormGroup {
    return this.parentFormGroup.control as FormGroup;
  }

  private parentFormGroup = inject(ControlContainer);
}
