import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import {
  NbSidebarModule,
  NbLayoutModule,
  NbSidebarService,
} from '@nebular/theme';
import { UiTemplateModule } from '@portifolio/ui-template';

@Component({
  standalone: true,
  imports: [RouterModule, UiTemplateModule, NbLayoutModule, NbSidebarModule],
  providers: [NbSidebarService],
  selector: 'portifolio-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
