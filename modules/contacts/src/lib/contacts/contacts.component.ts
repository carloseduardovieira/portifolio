import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DynamicFormConfig } from '@cvieira/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'cvieira-contacts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss',
})
export class ContactsComponent implements OnInit {
  formConfig$!: Observable<DynamicFormConfig>;
  form!: FormGroup;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.formConfig$ = this.http
      .get<DynamicFormConfig>('/assets/form/contacts.form.json')
      .pipe(tap(({ controls }) => this.buildForm(controls)));
  }

  private buildForm(controls: DynamicFormConfig['controls']): void {
    this.form = new FormGroup({});
    Object.keys(controls).forEach((key) => {
      this.form.addControl(key, new FormControl(controls[key].value));
    });
  }
}
