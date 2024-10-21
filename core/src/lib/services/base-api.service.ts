import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments';

@Injectable({
  providedIn: 'root',
})
export abstract class BaseApiService<T> {
  protected baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  abstract individualUrl: () => string;
  abstract genericUrl: () => string;

  getAll(): Observable<T[]> {
    return this.http.get<T[]>(this.genericUrl());
  }

  getOne(): Observable<T> {
    return this.http.get<T>(this.individualUrl());
  }

  create(body: Partial<T>): Observable<T> {
    return this.http.post<T>(this.genericUrl(), body);
  }

  update(body: Partial<T>): Observable<T> {
    return this.http.put<T>(this.individualUrl(), body);
  }

  delete(): Observable<void> {
    return this.http.delete<void>(this.individualUrl());
  }
}
