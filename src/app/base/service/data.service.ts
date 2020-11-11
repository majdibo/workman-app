import {HttpClient} from '@angular/common/http';
import {throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {NotFoundError} from '../common/error/NotFoundError';
import {AppError} from '../common/error/AppError';

export class DataService {

  constructor(private url: string, private http: HttpClient) {
  }

  findAll() {
    return this.http.get(this.url).pipe(this.handleError());
  }

  findById(id: string) {
    return this.http.get(this.url + '/' + id).pipe(this.handleError());
  }

  create(data) {
    return this.http.post(this.url, data).pipe(this.handleError());
  }

  update(id: string, data) {
    return this.http.put(this.url + '/' + id, data).pipe(this.handleError());
  }

  delete(id: string) {
    return this.http.delete(this.url + '/' + id).pipe(this.handleError());
  }

  private handleError() {
    return catchError((err: Response) => throwError(err.status == 404 ? new NotFoundError() : new AppError(err)));
  }

}
