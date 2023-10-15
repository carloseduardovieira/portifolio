import { Observable } from 'rxjs';

export interface SearchInputManagementInterface<M> {
  bindLabel: string;
  loadItemsByTerm(term: string): Observable<M[]>;
}
