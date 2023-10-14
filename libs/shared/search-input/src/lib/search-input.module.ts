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
import { HttpClientModule } from '@angular/common/http';

const components = [SearchInputComponent];

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    NbInputModule,
    NbCardModule,
    HttpClientModule,
  ],
  declarations: [...components],
  exports: components,
  providers: [NbFocusMonitor, NbStatusService],
})
export class SearchInputModule {}
