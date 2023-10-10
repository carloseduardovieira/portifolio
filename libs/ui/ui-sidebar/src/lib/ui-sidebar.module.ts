import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiSidebarComponent } from './ui-sidebar/ui-sidebar.component';

@NgModule({
  imports: [CommonModule],
  declarations: [UiSidebarComponent],
  exports: [UiSidebarComponent],
})
export class UiSidebarModule {}
