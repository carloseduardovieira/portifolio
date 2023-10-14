import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchInputComponent } from './search-input/search-input.component';
import {
  NbCardModule,
  NbFocusMonitor,
  NbInputModule,
  NbStatusService,
} from '@nebular/theme';

const components = [SearchInputComponent];

@NgModule({
  imports: [CommonModule, TranslateModule, NbInputModule, NbCardModule],
  declarations: [...components],
  exports: components,
  providers: [NbFocusMonitor, NbStatusService],
})
export class SearchInputModule {}
