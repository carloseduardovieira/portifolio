import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ControlInjectorPipe } from "../../../pipes/control-injector/control-injector.pipe";
import { DynamicControlPipe } from "../../../pipes/dynamic-control.pipe";
import { BaseDynamicControl } from '../base-dynamic-control';

@Component({
    selector: 'ben-group',
    standalone: true,
    template: `
    <ng-container [formGroup]="formGroup">
      <fieldset [formGroupName]="control.controlKey">
        <legend>{{control.config.label}}</legend>
        @for(control of control.config.controls | keyvalue; track control.key) {
          <div class="form-field">
          <ng-container 
            [ngComponentOutlet]="control.value.controlType | dynamicControl"
            [ngComponentOutletInjector]="control.key | controlInjector: control.value">
          </ng-container>
          </div>
        }
      </fieldset>
    </ng-container>
  `,
    imports: [CommonModule, ReactiveFormsModule, DynamicControlPipe, ControlInjectorPipe]
})
export class BenGroupComponent extends BaseDynamicControl {}
