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
    let names: ControlsNames<F> = {};
    Object.keys(this.formGroup.controls).forEach(value => {
      names[value] = value;
    });

    return names;
  }

  get converter(): Type<Converter<M, F>> {
    return DefaultConverter;
  }

  public get arrays(): ArrayControls<F> {
    let result = {}
    for (let controlsKey in this.formGroup.controls) {
      let control = this.formGroup.get(controlsKey);
      if (control instanceof FormArray) {
        result[controlsKey] = control
      }
    }

    return result as ArrayControls<F>;
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
      let formModel = this.toForm(model);
      Object.keys(formModel).forEach(key => {
        if(formModel[key] instanceof Array){
          this.updateFormArray(formModel[key], this.arrays[key])
        }
      })

       this.formGroup.patchValue(formModel);
     }
  }

  updateFormArray(formModelElement: Array<keyof F>, array: FormArray) {
    formModelElement.forEach(element=> {
      array.push(this.createControlFor(element))
    })
  }

  createControlFor(element): AbstractControl {
    if(typeof element !== 'object') return this.fb.control(element)
    else if (element instanceof Array) {
      let array = this.fb.array([]);
      this.updateFormArray(element, array);
      return array
    }
    else return this.fb.group(element)

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
