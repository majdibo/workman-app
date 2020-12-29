import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {NotFoundError} from '../common/error/NotFoundError';
import {AppError} from '../common/error/AppError';

export class DataService<T> {

  constructor(private url: string, private http: HttpClient) {
  }

  findAll(): Observable<T[] |AppError> {
    return this.http.get<T[]>(this.url).pipe(this.handleError());
  }

  findById(id: string): Observable<T|AppError>  {
    return this.http.get<T>(this.url + '/' + id).pipe(this.handleError());
  }

  create(data: T) : Observable<T|AppError>{
    return this.http.post<T>(this.url, data).pipe(this.handleError());
  }

  update(id: string, data: T): Observable<T|AppError> {
    return this.http.put<T>(this.url + '/' + id, data).pipe(this.handleError());
  }

  delete(id: string) : Observable<T|AppError>{
    return this.http.delete<T>(this.url + '/' + id).pipe(this.handleError());
  }

  private handleError() {
    return catchError((err: Response) => throwError(err.status == 404 ? new NotFoundError() : new AppError(err)));
  }

}
