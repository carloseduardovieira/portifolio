import { UiTemplateModule } from './../../../../libs/ui/ui-template/src/lib/ui-template.module';
import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NbSidebarModule,
  NbLayoutModule,
  NbButtonModule,
  NbSidebarService,
} from '@nebular/theme';

@Component({
  selector: 'portifolio-nx-welcome',
  standalone: true,
  imports: [
    CommonModule,
    UiTemplateModule,
    NbLayoutModule,
    NbSidebarModule,
    NbButtonModule,
  ],
  providers: [NbSidebarService],
  template: `
    <nb-layout>
      <nb-layout-header fixed>Company Name</nb-layout-header>

      <nb-sidebar>Sidebar Content</nb-sidebar>

      <nb-layout-column>
        Page Content <button nbButton>Hello World</button>
      </nb-layout-column>
    </nb-layout>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {}
