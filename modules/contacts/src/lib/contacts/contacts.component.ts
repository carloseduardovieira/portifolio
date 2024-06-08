import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DynamicFormTemplateComponent } from '@cvieira/core';


@Component({
  selector: 'cvieira-contacts',
  standalone: true,
  imports: [CommonModule, DynamicFormTemplateComponent],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss',
})
export class ContactsComponent {}
