import { Component } from '@angular/core';
import { UserListControllerService } from '../github-search/services/user-list.controller.service';

@Component({
  selector: 'por-github-users',
  templateUrl: './github-users.component.html',
  styleUrls: ['./github-users.component.scss'],
  providers: [
    {
      provide: 'SearchInputManagementInterface',
      useClass: UserListControllerService,
    },
  ],
})
export class GithubUsersComponent {}
