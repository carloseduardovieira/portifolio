import { Subject } from 'rxjs';

export interface SearchInputManagementInterface<M> {
  newItemsLoaded$?: Subject<M[]>;
  searchQueryChanged(query: string): void;
}
