import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NbSidebarModule, NbSidebarService } from '@nebular/theme';
import { UiTemplateModule } from '@portifolio/ui-template';

@Component({
  standalone: true,
  imports: [RouterModule, UiTemplateModule, NbSidebarModule],
  providers: [NbSidebarService],
  selector: 'portifolio-root',
  template: `
    <nb-layout>
      <nb-layout-header fixed>Carlos Eduardo Vieira</nb-layout-header>

      <nb-sidebar>Github - Search</nb-sidebar>

      <nb-layout-column>
        <router-outlet></router-outlet>
      </nb-layout-column>
    </nb-layout>
  `,
})
export class AppComponent {}
