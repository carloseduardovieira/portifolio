import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { TranslateModule } from '@ngx-translate/core';
import {
  NbCardModule,
  NbFocusMonitor,
  NbInputModule,
  NbListModule,
  NbStatusService,
} from '@nebular/theme';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

const components = [ListComponent];

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    NbInputModule,
    NbCardModule,
    NbListModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  declarations: [...components],
  exports: components,
  providers: [NbFocusMonitor, NbStatusService],
})
export class ListModule {}
