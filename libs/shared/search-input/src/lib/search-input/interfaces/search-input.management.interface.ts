import { Observable } from 'rxjs';

export interface SearchInputManagementInterface<M> {
  newItemsLoaded$?: Observable<M[]>;
  searchQueryChanged(query: string): void;
}
