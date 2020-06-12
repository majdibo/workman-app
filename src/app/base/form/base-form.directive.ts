import {ControlValueAccessor} from '@angular/forms';
import {AbstractForm} from './abstract-form.directive';
import {Subscription} from 'rxjs';
import {Directive, EventEmitter, OnDestroy, OnInit} from '@angular/core';

@Directive()
export abstract class BaseFormDirective<M, F = M> extends AbstractForm<M, F> implements ControlValueAccessor, OnInit, OnDestroy {

  public formSubscription$: Subscription;
  public formChanged = new EventEmitter<F>();

  ngOnInit() {
    super.ngOnInit();
    this.formSubscription$ = this.onFormChange().subscribe(val => {
      this.updateValue(val);
      this.formChanged.emit(val);
    });
  }

  ngOnDestroy() {
    super.ngOnDestroy();
    this.formSubscription$.unsubscribe();
  }

  onChange: any = () => {
  }

  onTouch: any = () => {
  }

  writeValue(obj: F): void {
    this.updateValue(obj);

    if (obj !== undefined && obj !== null) {
      this.formGroup.patchValue(obj);
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
    this.formChanged.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
  }

  onFormChange() {
    return this.formGroup.valueChanges;
  }

  updateValue(val: F) {
    super.updateValue(val);
    this.onChange(val);
    this.onTouch(val);
  }

}
