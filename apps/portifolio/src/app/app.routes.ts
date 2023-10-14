import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'search',
    loadChildren: () =>
      import(
        '../../../../libs/modules/github-search/src/lib/github-search.module'
      ).then((m) => m.GithubSearchModule),
  },
  {
    path: '',
    redirectTo: 'search',
    pathMatch: 'full',
  },
];
