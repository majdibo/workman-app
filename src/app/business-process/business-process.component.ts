import {Component} from '@angular/core';
import {BaseForm} from '../base/form/base-form.directive';
import {Controls} from '../base/form/shared/types';

@Component({
  selector: 'mw-business-process',
  template: `
    <h1>BusinessProcessComponent</h1>
    <form [formGroup]="formGroup" (ngSubmit)="sayHello()">
      <mat-form-field>
        <mat-label>{{fields.name}}</mat-label>
        <input matInput [formControlName]="fields.name">
      </mat-form-field>
      <mat-divider></mat-divider>
      <br>
      <button mat-stroked-button type="submit">Apply</button>
    </form>
    <span>{{value | json}}</span>
  `
})
export class BusinessProcessComponent extends BaseForm<BusinessProcess> {

  protected getControls(): Controls<BusinessProcess> {
    return {
      name: this.fb.control(''),
    };
  }

  sayHello() {
    console.log(this.formGroup.value);
  }

}

class BusinessProcess {
  name: string;

}
