import {ControlValueAccessor} from '@angular/forms';
import {AbstractForm} from './abstract-form.directive';
import {Subscription} from 'rxjs';
import {Directive, EventEmitter, Input, OnDestroy, OnInit} from '@angular/core';

@Directive()
export abstract class BaseFormDirective<M, F = M> extends AbstractForm<M, F> implements ControlValueAccessor, OnInit, OnDestroy {

  public formSubscription$: Subscription;
  public formChanged = new EventEmitter<F>();

  @Input() mode: 'edit' | 'read';

  ngOnInit() {
    super.ngOnInit();
    this.formSubscription$ = this.onFormChange().subscribe(val => {
      this.updateValue(val);
      this.formChanged.emit(val);
    });

    if (this.mode == 'read') {
      this.setDisabledState(true);
    }

  }

  ngOnDestroy() {
    super.ngOnDestroy();
    this.formSubscription$.unsubscribe();
  }

  onChange: any = () => {
  };

  onTouch: any = () => {
  };

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
    for (const controlsKey in this.formGroup.controls) {
      if (isDisabled || this.mode == 'read') {
        this.formGroup.get(controlsKey).disable();
      } else {
        this.formGroup.get(controlsKey).enable();
      }
    }
  }

  onFormChange() {
    return this.formGroup.valueChanges;
  }

  updateValue(val: F) {
    super.updateValue(val);
    this.onChange(val);
    this.onTouch(val);
  }

  get editable(): boolean {
    return this.mode !== 'read'
  }
}
