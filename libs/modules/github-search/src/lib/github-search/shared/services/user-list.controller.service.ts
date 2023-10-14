import { Subject } from 'rxjs';
import { UsersService } from './../../../shared/services/users.service';
import { Injectable } from '@angular/core';
import { User } from '../../../shared';
import { SearchInputManagementInterface } from '@portifolio/search-input';

@Injectable({
  providedIn: 'root',
})
export class UserListControllerService
  implements SearchInputManagementInterface<User>
{
  constructor(private usersService: UsersService) {}

  newItemsLoaded$?: Subject<User[]> = new Subject();

  searchQueryChanged(query: string): void {
    this.usersService.findAll().subscribe();
  }
}
