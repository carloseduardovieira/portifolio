import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseDynamicControl } from '../base-dynamic-control';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'ben-checkbox',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <ng-container [formGroup]="formGroup">
      <input type="checkbox" [formControlName]="control.controlKey" [checked]="control.config.value">
    </ng-container>
  `,
})
export class BenCheckboxComponent extends BaseDynamicControl {}
