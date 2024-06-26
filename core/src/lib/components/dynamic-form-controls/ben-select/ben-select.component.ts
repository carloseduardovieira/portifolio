import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { BaseDynamicControl } from '../base-dynamic-control';

@Component({
  selector: 'ben-select',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
  <ng-container [formGroup]="formGroup">
    <label [for]="control.controlKey">{{ control.config.label }}</label>
    <select [formControlName]="control.controlKey" [id]="control.config.id" [value]="control.config.value">
      @for(option of control.config.options; track control.config.id){
        <option [value]="option.value">{{option.label}}</option>
      }
    </select>
  </ng-container>
  `,
})
export class BenSelectComponent extends BaseDynamicControl {}
