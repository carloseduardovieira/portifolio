import { Pipe, PipeTransform, Type } from '@angular/core';
import { DynamicControl } from '../models';
import { BenInputComponent } from '../components/ben-input/ben-input.component';
import { BenSelectComponent } from '../components/ben-select/ben-select.component';

type DynamicControlsMap = {
  [T in DynamicControl['controlType']]: Type<any>;
};

@Pipe({
  name: 'dynamicControl',
  standalone: true,
})
export class DynamicControlPipe implements PipeTransform {
  transform(controlType: keyof DynamicControlsMap): Type<any> {
    const controlComponents: DynamicControlsMap = {
      input: BenInputComponent,
      select: BenSelectComponent,
    };

    return controlComponents[controlType];
  }
}
