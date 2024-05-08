import { Injector, Pipe, PipeTransform } from '@angular/core';
import { DynamicControl } from '../../models';
import { CONTROL_DATA } from './control-data.token';

@Pipe({
  name: 'controlInjector',
  standalone: true
})
export class ControlInjectorPipe implements PipeTransform {

  transform(controlKey: string, config: DynamicControl): Injector {
    return Injector.create({
      providers: [
        {
          provide: CONTROL_DATA,
          useValue: {
            controlKey,
            config
          }
        }
      ]
    });
  }

}
