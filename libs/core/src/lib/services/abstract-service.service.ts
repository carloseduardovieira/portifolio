import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, timeout } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export abstract class AbstractService<M> {
  protected baseUrl = 'https://api.github.com';

  private timeout = 15000;

  constructor(protected http: HttpClient) {}

  protected abstract instatiateItem(item: unknown): M;

  protected abstract instatiateItems(items: unknown): M[];

  protected abstract handleError(): Observable<void>;

  public findById(id: string, baseUrl?: string): Observable<M> {
    if (!baseUrl) {
      baseUrl = this.baseUrl;
    }

    return this.http.get(`${baseUrl}/${id}`).pipe(
      catchError(() => {
        return this.handleError();
      }),
      timeout(this.timeout),
      map((response: unknown) => this.instatiateItem(response))
    );
  }

  public findAll(baseUrl?: string): Observable<M[]> {
    if (!baseUrl) {
      baseUrl = this.baseUrl;
    }

    return this.http.get(baseUrl).pipe(
      catchError(() => {
        return this.handleError();
      }),
      timeout(this.timeout),
      map((response: unknown) => this.instatiateItems(response))
    );
  }

  public findAllPaginated(
    term: string,
    page: number,
    baseUrl?: string,
    sortBy = 'createdAt',
    sortDirection = 'ASC',
    perPage = 25
  ): Observable<M[]> {
    if (!baseUrl) {
      baseUrl = this.baseUrl;
    }

    return this.http
      .get(`${baseUrl}`, {
        params: new HttpParams()
          .set('q', term)
          .set('page', page)
          .set('sort', `${sortBy}, ${sortDirection}`)
          .set('per_page', perPage),
      })
      .pipe(
        catchError(() => {
          return this.handleError();
        }),
        timeout(this.timeout),
        map((response: unknown) => this.instatiateItems(response))
      );
  }
}
