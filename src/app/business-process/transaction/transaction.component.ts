import {Component} from '@angular/core';
import {Transaction} from './transaction';
import {subForm} from '../../base/form/shared/utils';
import {Controls} from '../../base/form/shared/types';
import {BaseFormDirective} from '../../base/form/base-form.directive';

@Component({
  selector: 'mw-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css'],
  providers: [subForm(TransactionComponent)]
})
export class TransactionComponent extends BaseFormDirective<Transaction> {
    protected getControls(): Controls<Transaction> {
        return {
          from: this.fb.control(''),
          to : this.fb.control('')
        };
    }

}


