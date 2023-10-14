import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbLayoutModule, NbThemeModule } from '@nebular/theme';

@NgModule({
  imports: [
    CommonModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
  ],
  exports: [NbThemeModule, NbLayoutModule],
})
export class UiTemplateModule {}
