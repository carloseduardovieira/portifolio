import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'map',
    loadComponent: () =>
      import('@vessel-ship-management/map').then((c) => c.MapComponent),
  },
  {
    path: '',
    redirectTo: 'map',
    pathMatch: 'full',
  },
];
