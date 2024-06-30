import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Observable, tap } from 'rxjs';
import { DynamicControl, DynamicFormConfig } from '../../../models/dynamic-forms.model';
import { ControlInjectorPipe } from '../../../pipes/control-injector/control-injector.pipe';
import { banWords } from '../../dynamic-form-validators';
import { DynamicControlPipe } from './../../../pipes/dynamic-control.pipe';

@Component({
  selector: 'ben-dynamic-form-template',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, DynamicControlPipe, ControlInjectorPipe],
  templateUrl: './dynamic-form-template.component.html',
  styleUrl: './dynamic-form-template.component.scss',
})
export class DynamicFormTemplateComponent implements OnInit {
  formConfig$!: Observable<DynamicFormConfig>;
  form!: FormGroup;

  constructor(
    private http: HttpClient,
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  protected onSubmit() {
    console.log('Submitted data: ', this.form.value);
    this.form.reset();
  }
  
  private initForm(): void {
    this.formConfig$ = this.http
      .get<DynamicFormConfig>('/assets/form/contacts.form.json')
      .pipe(tap(({ controls }) => this.buildForm(controls)));
  }

  private buildForm(controls: DynamicFormConfig['controls']): void {
    this.form = new FormGroup({});
    Object.keys(controls).forEach((key) => {
      const validators = this.resolveValidators(controls[key]);
      this.form.addControl(key, new FormControl(controls[key].value, validators));
    });
  }

  private resolveValidators({ validators = {} }: DynamicControl) {
    return (Object.keys(validators) as Array<keyof typeof validators>).map(validatorKey => {
      const validatorValue = validators[validatorKey];
      if (validatorKey === 'required') {
        return Validators.required;
      }
      if (validatorKey === 'email') {
        return Validators.email;
      }
      if (validatorKey === 'requiredTrue') {
        return Validators.requiredTrue;
      }
      if (validatorKey === 'minLength' && typeof validatorValue === 'number') {
        return Validators.minLength(validatorValue);
      }
      if (validatorKey === 'banWords' && Array.isArray(validatorValue)) {
        return banWords(validatorValue);
      }
      return Validators.nullValidator;
    })
  }
}
