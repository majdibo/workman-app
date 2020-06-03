import {AbstractControl} from '@angular/forms';

export type Controls<T> = { [K in keyof T]-?: AbstractControl }
export type ControlsNames<T> = { [K in keyof T]?: K };
