import { Component } from '@angular/core';
import { UserListControllerService } from '../../services/user-list.controller.service';

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
