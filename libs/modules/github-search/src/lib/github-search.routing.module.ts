import { Route, RouterModule } from '@angular/router';
import { GithubSearchComponent } from './github-search/github-search.component';
import { NgModule } from '@angular/core';
import { GithubUserComponent } from './github-user/github-user.component';
import { GithubUsersComponent } from './github-users/github-users.component';

export const routes: Route[] = [
  {
    path: 'users',
    component: GithubSearchComponent,
    children: [
      {
        path: '',
        component: GithubUsersComponent,
      },
      {
        path: ':username',
        component: GithubUserComponent,
      },
    ],
  },
  {
    path: '',
    redirectTo: 'users',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GithubSearchRoutingModule {}
