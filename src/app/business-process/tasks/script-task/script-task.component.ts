import {Component, Injector} from '@angular/core';
import {BaseFormDirective} from '../../../base/form/base-form.directive';
import {ScriptTask} from './script-task';
import {Controls} from '../../../base/form/shared/types';
import {FormBuilder, Validators} from '@angular/forms';
import {ScriptTaskService} from './script-task.service';

@Component({
  selector: 'mw-script-task',
  templateUrl: './script-task.component.html',
  styleUrls: ['./script-task.component.css']
})
export class ScriptTaskComponent extends BaseFormDirective<ScriptTask> {

  constructor(private service: ScriptTaskService, fb: FormBuilder, injector: Injector) {
    super(fb, injector);
  }

  protected getControls(): Controls<ScriptTask> {
    return {
      name: this.fb.control('', Validators.required),
      script: this.fb.control('', Validators.required),
      type: this.fb.control('script', Validators.required),
    };
  }


  apply() {
    if (this.formGroup.valid) {
      console.log(this.value);
      this.service.create(this.value).subscribe();
    }
  }
}
