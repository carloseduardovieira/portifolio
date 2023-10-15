import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GithubSearchHttpResponse, User } from '../models';
import { AbstractService } from '@portifolio/core';

@Injectable({
  providedIn: 'root',
})
export class SearchService extends AbstractService<User> {
  constructor(protected httpClient: HttpClient) {
    super(httpClient);
    this.baseUrl = `${this.baseUrl}/search/users`;
  }

  public searchByUsers(query: string): Observable<User[]> {
    return super.findAll(`${this.baseUrl}?q=${query}`);
  }

  protected instatiateItem(user: User): User {
    return new User(user);
  }

  protected instatiateItems(response: GithubSearchHttpResponse): User[] {
    return response.items.map((item) => this.instatiateItem(item));
  }

  protected handleError(): Observable<void> {
    console.error('ERROR: unexpected error!');
    return of();
  }
}
