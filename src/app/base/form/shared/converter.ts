import {Injectable} from '@angular/core';

export interface Converter<M, F = M> {
  toModel(f: F): M;

  toForm(m: M): F;
}

@Injectable({
  providedIn: 'root'
})
export class DefaultConverter implements Converter<any, any> {
  toModel(f: any): any {
    return f;
  }

  toForm(m: any): any {
    return m;
  }
}
