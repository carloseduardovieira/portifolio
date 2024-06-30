import { Pipe, PipeTransform, Type } from '@angular/core';
import { BenCheckboxComponent, BenGroupComponent, BenInputComponent, BenSelectComponent } from '../components';
import { DynamicControl } from '../models';


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
      group: BenGroupComponent
    };

    return controlComponents[controlType];
  }
}
