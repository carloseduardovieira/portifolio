import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ControlInjectorPipe } from '../../../pipes/control-injector/control-injector.pipe';
import { BaseDynamicControl } from '../base-dynamic-control';
import { DynamicControlResolver } from './../../../resolvers/dynamic-control.resolver';

@Component({
  selector: 'ben-group',
  standalone: true,
  template: `
    <ng-container [formGroup]="formGroup">
      <fieldset [formGroupName]="control.controlKey">
        <legend>{{ control.config.label }}</legend>
        @for(control of control.config.controls | keyvalue; track control.key) {
        <div class="form-field">
          <ng-container
            [ngComponentOutlet]="
              controlResolver.resolve(control.value.controlType)
            "
            [ngComponentOutletInjector]="
              control.key | controlInjector : control.value
            "
          ></ng-container>
        </div>
        }
      </fieldset>
    </ng-container>
  `,
  imports: [CommonModule, ReactiveFormsModule, ControlInjectorPipe],
})
export class BenGroupComponent extends BaseDynamicControl {
  controlResolver = inject(DynamicControlResolver);
}
