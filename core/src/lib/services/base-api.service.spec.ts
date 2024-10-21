import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { IEntity } from '../models';
import { BaseApiService } from './base-api.service';

describe('BaseApiService', () => {
  let service: BaseApiService<IEntity>;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(BaseApiService);
    httpMock = TestBed.inject(HttpTestingController);

    service.genericUrl = () => 'http://localhost:4200/books';
    service.individualUrl = () => 'http://localhost:4200/books/123';
  });

  fit('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#getAll', () => {
    const booksMock: IEntity[] = [
      {
        id: '123',
        name: 'No Rules',
      },
      {
        id: '321',
        name: 'Rich dad poor dad',
      },
    ];

    it('should return an array of elements', (done) => {
      service.getAll().subscribe((books) => {
        expect(books).toEqual(booksMock);
        done();
      });

      const req = httpMock.expectOne(service.genericUrl());
      expect(req.request.method).toBe('GET');
      req.flush(booksMock);
    });
  });

  describe('#getOne', () => {
    const bookMock: IEntity = {
      id: '123',
      name: 'No Rules',
    };

    it('should return an element', (done) => {
      service.getOne().subscribe((book) => {
        expect(book).toEqual(bookMock);
        done();
      });

      const req = httpMock.expectOne(service.individualUrl());
      expect(req.request.method).toBe('GET');
      req.flush(bookMock);
    });
  });

  describe('#create', () => {
    const bookMock: IEntity = {
      name: 'No Rules',
    };

    it('should create a new element and return it', (done) => {
      const id = '124';
      service.create(bookMock).subscribe((book) => {
        expect(book).toEqual({
          id: '124',
          name: bookMock.name,
        });
        done();
      });

      const req = httpMock.expectOne(service.genericUrl());
      expect(req.request.method).toBe('POST');
      req.flush({ ...bookMock, id });
    });
  });

  describe('#update', () => {
    const bookMock: IEntity = {
      id: '124',
      name: 'No Rules',
    };

    it('should update an element and return it', (done) => {
      service.update(bookMock).subscribe((book) => {
        expect(book).toEqual({
          id: '124',
          name: 'No rules rules',
        });
        done();
      });

      const req = httpMock.expectOne(service.individualUrl());
      expect(req.request.method).toBe('PUT');
      req.flush({ id: bookMock.id, name: 'No rules rules' });
    });
  });

  describe('#delete', () => {
    it('should delete an element', (done) => {
      service.delete().subscribe((result) => {
        expect(result).toBeNull();
        done();
      });

      const req = httpMock.expectOne(service.individualUrl());
      expect(req.request.method).toBe('DELETE');
      req.flush(null);
    });
  });
});
