import { Observable } from 'rxjs';

export interface SearchInputManagementInterface<M> {
  bindLabel: string;
  termValidator?: RegExp;
  loadItemsByTerm(term: string): Observable<M[]>;
}
