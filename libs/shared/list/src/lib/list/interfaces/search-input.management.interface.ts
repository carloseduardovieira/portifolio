import { Observable } from 'rxjs';

export interface SearchInputManagementInterface<M> {
  placeholder: string;
  bindLabel: string;
  initialValue: string;
  bindValue?: string;
  termValidator?: RegExp;
  loadItemsByTerm(term: string): Observable<M[]>;
}
