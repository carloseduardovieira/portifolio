import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CONTROL_DATA } from './../../../pipes/control-injector/control-data.token';
import { ControlContainer, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'ben-select',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
  <ng-container [formGroup]="formGroup">
    <select [id]="control.config.id" [value]="control.config.value">
      @for(option of control.config.options; track control.config.id){
        <option [value]="option.value">{{option.label}}</option>
      }
    </select>
  </ng-container>
  `,
  styles: ``,
})
export class BenSelectComponent {
  control = inject(CONTROL_DATA);
  
  get formGroup(): FormGroup {
    return this.parentFormGroup.control as FormGroup;
  }

  private parentFormGroup = inject(ControlContainer);
}
