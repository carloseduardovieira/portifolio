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
  }

  protected instatiateItem(response: unknown): User {
    // todo - handle instantiate
    return new User();
  }

  protected instatiateItems(response: unknown): User[] {
    // todo - handle instatiate items
    return [new User()];
  }

  protected handleError(): Observable<void> {
    return of();
  }
}
