import {Component} from '@angular/core';
import {Transition} from './transition';
import {subForm} from '../../base/form/shared/utils';
import {Controls} from '../../base/form/shared/types';
import {BaseFormDirective} from '../../base/form/base-form.directive';

@Component({
  selector: 'mw-transition',
  templateUrl: './transition.component.html',
  styleUrls: ['./transition.component.css'],
  providers: [subForm(TransitionComponent)]
})
export class TransitionComponent extends BaseFormDirective<Transition> {
    protected getControls(): Controls<Transition> {
        return {
          from: this.fb.control(''),
          to : this.fb.control('')
        };
    }

}


