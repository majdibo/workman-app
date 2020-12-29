import {Component, Injector} from '@angular/core';
import {Controls} from '../../base/form/shared/types';
import {BaseFormDirective} from '../../base/form/base-form.directive';
import {FormBuilder, Validators} from '@angular/forms';
import {BusinessProcessService} from '../business-process.service';
import {BusinessProcess} from '../business.process';

@Component({
  selector: 'mw-business-process',
  templateUrl: 'business-process-detail.component.html',
  styleUrls: ['business-process-detail.component.css']
})
export class BusinessProcessDetailComponent extends BaseFormDirective<BusinessProcess> {

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
