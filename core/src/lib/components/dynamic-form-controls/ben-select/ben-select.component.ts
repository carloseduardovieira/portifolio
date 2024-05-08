import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CONTROL_DATA } from './../../../pipes/control-injector/control-data.token';

@Component({
  selector: 'ben-select',
  standalone: true,
  imports: [CommonModule],
  template: `
    <select [id]="control.config.id" [value]="control.config.value">
      @for(option of control.config.options; track control.config.id){
        <option [value]="option.value">{{option.label}}</option>
      }
    </select>
  `,
  styles: ``,
})
export class BenSelectComponent {
  control = inject(CONTROL_DATA);
}
