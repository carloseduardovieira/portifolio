import { Route, RouterModule } from '@angular/router';
import { GithubSearchComponent } from './github-search/github-search.component';
import { NgModule } from '@angular/core';

export const routes: Route[] = [
  {
    path: '',
    component: GithubSearchComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GithubSearchRoutingModule {}
