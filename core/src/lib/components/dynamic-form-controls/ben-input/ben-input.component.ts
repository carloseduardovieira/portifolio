import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BaseDynamicControl } from '../base-dynamic-control';


@Component({
  selector: 'ben-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <ng-container [formGroup]="formGroup">
      <label [for]="control.controlKey">{{ control.config.label }}</label>
      <input 
        [formControlName]="control.controlKey"
        [value]="control.config.value" 
        [id]="control.config.id" 
        [type]="control.config.type">
    </ng-container>
              `,
})
export class BenInputComponent extends BaseDynamicControl {}
