import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { SearchService, User } from '../../shared';
import { SearchInputManagementInterface } from '@portifolio/list';

@Injectable({
  providedIn: 'root',
})
export class UserListControllerService
  implements SearchInputManagementInterface<User>
{
  public placeholder = 'SEARCH.PLACEHOLDER';
  public initialValue = 'carloseduardo';
  public bindLabel = 'username';
  public bindValue = 'username';

  constructor(private searchService: SearchService) {}

  public loadItemsByTerm(term: string, page: number): Observable<User[]> {
    return this.searchService.findAllPaginated(term, page);
  }
}
