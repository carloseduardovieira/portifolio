import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'map',
    loadComponent: () => import('@cvieira/map').then((c) => c.MapComponent),
  },
  {
    path: 'contacts',
    loadComponent: () =>
      import('@cvieira/contacts').then((c) => c.ContactsComponent),
  },
  {
    path: '',
    redirectTo: 'map',
    pathMatch: 'full',
  },
];
