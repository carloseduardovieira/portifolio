import { SearchInputModule } from './../../../../shared/search-input/src/lib/search-input.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GithubSearchComponent } from './github-search/github-search.component';
import { GithubSearchRoutingModule } from './github-search.routing.module';

@NgModule({
  imports: [CommonModule, GithubSearchRoutingModule, SearchInputModule],
  declarations: [GithubSearchComponent],
})
export class GithubSearchModule {}
