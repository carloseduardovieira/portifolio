import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, timeout } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export abstract class AbstractService<M> {
  protected baseUrl = 'https://api.github.com/search';

  private timeout = 15000;

  constructor(protected http: HttpClient) {}

  protected abstract instatiateItem(item: unknown): M;

  protected abstract instatiateItems(items: unknown): M[];

  protected abstract handleError(): Observable<void>;

  public findById(): Observable<M> {
    return this.http.get(this.baseUrl).pipe(
      catchError(() => {
        return this.handleError();
      }),
      timeout(this.timeout),
      map((response: unknown) => this.instatiateItem(response))
    );
  }

  public findAll(): Observable<M[]> {
    return this.http.get(this.baseUrl).pipe(
      catchError(() => {
        return this.handleError();
      }),
      timeout(this.timeout),
      map((response: unknown) => this.instatiateItems(response))
    );
  }
}
