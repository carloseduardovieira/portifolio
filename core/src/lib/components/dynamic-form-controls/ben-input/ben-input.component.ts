import { CONTROL_DATA } from './../../../pipes/control-injector/control-data.token';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'ben-input',
  standalone: true,
  imports: [CommonModule],
  template: `<input [value]="control.config.value" [id]="control.config.id" [type]="control.config.type">`,
  styles: ``,
})
export class BenInputComponent {
  control = inject(CONTROL_DATA)
}
