import { DynamicControlPipe } from './../../../pipes/dynamic-control.pipe';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, tap } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DynamicFormConfig } from '../../../models/dynamic-forms.model';


@Component({
  selector: 'ben-dynamic-form-template',
  standalone: true,
  imports: [CommonModule, DynamicControlPipe,],
  templateUrl: './dynamic-form-template.component.html',
  styleUrl: './dynamic-form-template.component.scss',
})
export class DynamicFormTemplateComponent implements OnInit {
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
