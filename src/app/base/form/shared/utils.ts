import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {forwardRef, Provider} from '@angular/core';

export function subForm(component): Provider[] {
  return [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => component),
      multi: true,
    }
  ];
}
