import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import {
  NbSidebarModule,
  NbLayoutModule,
  NbButtonModule,
  NbSidebarService,
} from '@nebular/theme';
import { UiTemplateModule } from '@portifolio/ui-template';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    UiTemplateModule,
    NbLayoutModule,
    NbSidebarModule,
    NbButtonModule,
  ],
  providers: [NbSidebarService],
  selector: 'portifolio-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
