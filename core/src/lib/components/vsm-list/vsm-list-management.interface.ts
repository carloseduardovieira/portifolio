import { Observable } from 'rxjs';

export interface VsmListManagement<T> {
  getListItems: () => Observable<T[]>;
  searchInItemList: (query: string) => Observable<T[]>;
}
