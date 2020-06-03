import {Controls, ControlsNames} from './shared/types';
import {Injector, Input, OnDestroy, OnInit, Type} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Converter, DefaultConverter} from './shared/converter';

export abstract class AbstractForm<M, F = M> implements OnInit, OnDestroy {
  formGroup: FormGroup;
  @Input() value: M;
  protected converterService: Converter<M, F>;

  constructor(protected fb: FormBuilder, private injector: Injector) {
    this.converterService = this.injector.get(this.converter);
  }

  public get fields(): ControlsNames<F> {
    let names: ControlsNames<F> = {};
    Object.keys(this.formGroup.controls).forEach(value => {
      names[value] = value;
    });

    return names;
  }

  get converter(): Type<Converter<M, F>> {
    return DefaultConverter;
  }

  ngOnInit(): void {
    this.formGroup = this.fb.group(
      this.getControls()
    );

    this.updateForm(this.value);
  }

  ngOnDestroy(): void {
  }

  updateForm(model: M) {
    if (model !== undefined) {
      this.formGroup.patchValue(this.toForm(model));
    }
  }

  updateValue(val: F) {
    if (val !== undefined) {
      let model = this.toModel(val);
      if (this.value !== model) {
        this.value = model;
      }
    }
  }

  protected abstract getControls(): Controls<F>

  protected toModel(f: F): M {
    return this.converterService.toModel(f);
  }

  protected toForm(m: M): F {
    return this.converterService.toForm(m);
  }
}
