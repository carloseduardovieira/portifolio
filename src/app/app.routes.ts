import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'map',
    loadComponent: () => import('@cvieira/map').then((c) => c.MapComponent),
  },
  {
    path: 'users',
    loadComponent: () =>
      import('@cvieira/users').then((c) => c.UsersComponent),
  },
  {
    path: '',
    redirectTo: 'map',
    pathMatch: 'full',
  },
];
