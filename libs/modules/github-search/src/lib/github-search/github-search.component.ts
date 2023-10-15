import { Component } from '@angular/core';
import { UserListControllerService } from './services/user-list.controller.service';

@Component({
  selector: 'por-github-search',
  templateUrl: './github-search.component.html',
  styleUrls: ['./github-search.component.scss'],
  providers: [
    {
      provide: 'SearchInputManagementInterface',
      useClass: UserListControllerService,
    },
  ],
})
export class GithubSearchComponent {}
