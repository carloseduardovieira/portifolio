import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiLayoutHeaderComponent } from './ui-layout-header/ui-layout-header.component';
import { UiLayoutComponent } from './ui-layout/ui-layout.component';
import { UiLayoutColumnComponent } from './ui-layout-column/ui-layout-column.component';
import { UiLayoutFooterComponent } from './ui-layout-footer/ui-layout-footer.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    UiLayoutHeaderComponent,
    UiLayoutComponent,
    UiLayoutColumnComponent,
    UiLayoutFooterComponent,
  ],
  exports: [
    UiLayoutHeaderComponent,
    UiLayoutComponent,
    UiLayoutColumnComponent,
    UiLayoutFooterComponent,
  ],
})
export class UiLayoutModule {}
