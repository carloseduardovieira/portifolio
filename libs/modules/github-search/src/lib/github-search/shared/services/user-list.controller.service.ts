import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { SearchService, User } from '../../../shared';
import { SearchInputManagementInterface } from '@portifolio/search-input';

@Injectable({
  providedIn: 'root',
})
export class UserListControllerService
  implements SearchInputManagementInterface<User>
{
  private _newItemsLoaded$?: Subject<User[]> = new Subject();

  constructor(private searchService: SearchService) {
    this.searchQueryChanged('carloseduardov');
  }

  get newItemsLoaded$() {
    return this._newItemsLoaded$;
  }

  public searchQueryChanged(query: string): void {
    this.searchService.searchByUsers(query).subscribe({
      next: (users: User[]) => this._newItemsLoaded$?.next(users),
    });
  }
}
