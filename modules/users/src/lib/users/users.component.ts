import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DynamicFormTemplateComponent } from '@cvieira/core';

@Component({
  selector: 'cvieira-users',
  standalone: true,
  imports: [CommonModule, DynamicFormTemplateComponent],
  template: `
    <ben-dynamic-form-template></ben-dynamic-form-template>
  `,
  styles: [
    `
    :host {
      align-items: flex-start;
      display: flex;
      justify-content: flex-start;
      padding: 20px;
    }
    `
  ],
})
export class UsersComponent {}
