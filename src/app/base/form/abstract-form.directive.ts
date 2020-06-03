import {Controls, ControlsNames} from './shared/types';
import {Injector, OnDestroy, OnInit, Type} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Converter, DefaultConverter} from './shared/converter';

export abstract class AbstractForm<M, F = M> implements OnInit, OnDestroy {
  formGroup: FormGroup;
  value: M;
  converterService: Converter<M, F>;

  constructor(protected fb: FormBuilder, private injector: Injector) {
  }

  public get fields(): ControlsNames<F> {
    let names: ControlsNames<F> = {};
    Object.keys(this.formGroup.controls).forEach(value => {
      names[value] = value;
    });

    return names;
  }

  ngOnInit(): void {
    this.formGroup = this.fb.group(
      this.getControls()
    );

    this.converterService = this.injector.get(this.converter);
  }

  protected abstract getControls(): Controls<F>

  protected toModel(f: F): M {
    return this.converterService.toModel(f);
  }

  ngOnDestroy(): void {
  }

  update(val: F) {
    if (val !== undefined) {
      let model = this.toModel(val);
      if (this.value !== model) {
        this.value = model;
      }
    }
  }

  get converter(): Type<Converter<M, F>> {
    return DefaultConverter;
  }
}
