import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BaseDynamicControl } from '../base-dynamic-control';

@Component({
  selector: 'ben-checkbox',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <ng-container [formGroup]="formGroup">
      <input type="checkbox" [formControlName]="control.controlKey" [checked]="control.config.value">
      <label [for]="control.controlKey">{{ control.config.label }}</label>
    </ng-container>
  `,
  styles: [
    `
      :host {
        display: flex;
        align-items: center;
      }
    `
  ]
})
export class BenCheckboxComponent extends BaseDynamicControl {}
