import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models';
import { AbstractService } from '@portifolio/shared';

@Injectable({
  providedIn: 'root',
})
export class UsersService extends AbstractService<User> {
  constructor(protected httpClient: HttpClient) {
    super(httpClient);
    this.baseUrl = `${this.baseUrl}/users`;
  }

  protected instatiateItem(user: never): User {
    return new User(user);
  }

  protected instatiateItems(users: User[]): User[] {
    return users.map((item) => new User(item));
  }

  protected handleError(): Observable<void> {
    return of();
  }
}
