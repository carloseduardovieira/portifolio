import { Component, OnInit } from '@angular/core';
import { DynamicFormTemplateComponent } from '@cvieira/core';


@Component({
  selector: 'cvieira-contacts',
  standalone: true,
  imports: [DynamicFormTemplateComponent],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss',
})
export class ContactsComponent implements OnInit {
  ngOnInit(): void {
      throw "";
  }
}
