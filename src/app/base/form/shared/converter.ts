import {Injectable} from '@angular/core';

export interface Converter<M, F = M> {
    toModel(f: F): M
}

@Injectable({
  providedIn: 'root'
})
export class DefaultConverter implements Converter<any, any> {
  toModel(f: any): any {
    return f;
  }
}
