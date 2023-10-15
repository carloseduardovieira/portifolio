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
import { ScrollingModule } from '@angular/cdk/scrolling';
import { RouterModule } from '@angular/router';

const components = [ListComponent];

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule,
    NbInputModule,
    NbCardModule,
    NbListModule,
    HttpClientModule,
    ReactiveFormsModule,
    ScrollingModule,
  ],
  declarations: [...components],
  exports: components,
  providers: [NbFocusMonitor, NbStatusService],
})
export class ListModule {}
