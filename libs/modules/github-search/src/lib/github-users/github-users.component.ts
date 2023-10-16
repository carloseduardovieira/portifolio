import { Component } from '@angular/core';
import { UserListControllerService } from '../github-search/services/user-list.controller.service';

@Component({
  selector: 'por-github-users',
  template: '<por-list></por-list>',
  providers: [
    {
      provide: 'SearchInputManagementInterface',
      useClass: UserListControllerService,
    },
  ],
})
export class GithubUsersComponent {}
