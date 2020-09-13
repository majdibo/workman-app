import {ArrayControls, Controls, ControlsNames} from './shared/types';
import {Injector, Input, OnDestroy, OnInit, Type} from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {Converter, DefaultConverter} from './shared/converter';

export abstract class AbstractForm<M, F = M> implements OnInit, OnDestroy {
  formGroup: FormGroup;
  @Input() value: M;
  protected converterService: Converter<M, F>;

  constructor(protected fb: FormBuilder, injector: Injector) {
    this.converterService = injector.get(this.converter);
  }

  public get fields(): ControlsNames<F> {
    const names: ControlsNames<F> = {};
    Object.keys(this.formGroup.controls).forEach(value => {
      names[value] = value;
    });

    return names;
  }

  get converter(): Type<Converter<M, F>> {
    return DefaultConverter;
  }

  public get arrays(): ArrayControls<F> {
    const result = {};
    for (const controlsKey in this.formGroup.controls) {
      if (this.formGroup.get(controlsKey) instanceof FormArray) {
        result[controlsKey] = this.formGroup.get(controlsKey);
      }
    }

    return result as ArrayControls<F>;
  }

  ngOnInit(): void {
    this.createForm();
  }

  ngOnDestroy(): void {
  }

  updateForm(model: M) {
    if (model !== undefined) {
      const formModel = this.toForm(model);
      Object.keys(formModel).forEach(key => {
        if (formModel[key] instanceof Array) {
          this.updateFormArray(formModel[key], this.arrays[key]);
        }
      });

      this.formGroup.patchValue(formModel);
    }
  }

  updateFormArray(formModelElement: Array<keyof F>, array: FormArray) {
    formModelElement.forEach(element => {
      array.push(this.createControlFor(element));
    });
  }

  createControlFor(element): AbstractControl {
    if (typeof element !== 'object') {
      return this.fb.control(element);
    } else if (element instanceof Array) {
      const array = this.fb.array([]);
      this.updateFormArray(element, array);
      return array;
    } else {
      return this.fb.group(element);
    }

  }

  updateValue(val: F) {
    if (val !== undefined) {
      const model = this.toModel(val);
      if (this.value !== model) {
        this.value = model;
      }
    }
  }

  protected abstract getControls(): Controls<F>;

  protected toModel(f: F): M {
    return this.converterService.toModel(f);
  }

  protected toForm(m: M): F {
    return this.converterService.toForm(m);
  }

  protected createForm() {
    this.formGroup = this.fb.group(
      this.getControls()
    );

    this.updateForm(this.value);
  }
}
