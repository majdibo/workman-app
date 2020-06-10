import {AbstractControl, FormArray} from '@angular/forms';

export type Controls<T> = { [K in keyof T]-?: AbstractControl }
export type ControlsNames<T> = { [K in keyof T]?: K };

export type ArrayControls<T> = Pick<{ [K in keyof T]-?: FormArray }, Exclude<keyof T, NoneArrayKeys<T> > >;

type NoneArrayKeys<T> = {
  [K in keyof T]: T[K] extends Array<any> ? never :K;
}[keyof T];
