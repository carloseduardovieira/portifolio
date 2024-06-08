import { Injector, Pipe, PipeTransform, inject } from '@angular/core';
import { DynamicControl } from '../../models';
import { CONTROL_DATA } from './control-data.token';

@Pipe({
  name: 'controlInjector',
  standalone: true
})
export class ControlInjectorPipe implements PipeTransform {

  injector = inject(Injector);

  transform(controlKey: string, config: DynamicControl): Injector {
    return Injector.create({
      parent: this.injector,
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
