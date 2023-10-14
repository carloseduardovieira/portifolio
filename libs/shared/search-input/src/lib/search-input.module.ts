import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchInputComponent } from './search-input/search-input.component';

const components = [SearchInputComponent];

@NgModule({
  imports: [CommonModule],
  declarations: [...components],
  exports: components,
})
export class SearchInputModule {}
