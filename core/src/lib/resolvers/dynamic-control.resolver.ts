import { Injectable, Type } from '@angular/core';
import {
  BenCheckboxComponent,
  BenGroupComponent,
  BenInputComponent,
  BenSelectComponent,
} from '../components';
import { DynamicControl } from '../models';

type DynamicControlsMap = {
  [T in DynamicControl['controlType']]: Type<any>;
};

@Injectable({
  providedIn: 'root',
})
export class DynamicControlResolver {
  private controlComponents: DynamicControlsMap = {
    input: BenInputComponent,
    select: BenSelectComponent,
    checkbox: BenCheckboxComponent,
    group: BenGroupComponent,
  };
  resolve(controlType: keyof DynamicControlsMap) {
    return this.controlComponents[controlType];
  }
}
