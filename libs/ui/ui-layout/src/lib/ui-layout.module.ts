import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiLayoutHeaderComponent } from './ui-layout-header/ui-layout-header.component';
import { UiLayoutComponent } from './ui-layout/ui-layout.component';
import { UiLayoutColumnComponent } from './ui-layout-column/ui-layout-column.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    UiLayoutHeaderComponent,
    UiLayoutComponent,
    UiLayoutColumnComponent,
  ],
  exports: [
    UiLayoutHeaderComponent,
    UiLayoutComponent,
    UiLayoutColumnComponent,
  ],
})
export class UiLayoutModule {}
