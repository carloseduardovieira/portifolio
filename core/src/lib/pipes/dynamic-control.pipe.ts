import { Pipe, PipeTransform, Type } from '@angular/core';
import { DynamicControl } from '../models';
import { BenCheckboxComponent, BenInputComponent, BenSelectComponent } from '../components';


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
      checkbox: BenCheckboxComponent,
    };

    return controlComponents[controlType];
  }
}
