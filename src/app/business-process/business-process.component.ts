import {Component, Injector} from '@angular/core';
import {Controls} from '../base/form/shared/types';
import {Transition} from './transition/transition';
import {BaseFormDirective} from '../base/form/base-form.directive';
import {FormBuilder, Validators} from '@angular/forms';
import {BusinessProcessService} from './business-process.service';

@Component({
  selector: 'mw-business-process',
  templateUrl: 'business-process.component.html',
  styleUrls: ['business-process.component.css']
})
export class BusinessProcessComponent extends BaseFormDirective<BusinessProcess> {

  constructor(private service :  BusinessProcessService, fb: FormBuilder, injector: Injector) {
    super(fb, injector);
  }
  protected getControls(): Controls<BusinessProcess> {
    return {
      name: this.fb.control('', Validators.required),
      transitions: this.fb.array([])
    };
  }

  apply() {
    if (this.formGroup.valid) {
      console.log(this.value);
      this.service.create(this.value).subscribe();
    }
  }

  addTransition() {
    this.arrays.transitions.push(this.fb.control({}));
  }

}

class BusinessProcess {
  name: string;
  transitions: Transition[];
}
