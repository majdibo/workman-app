import {Component} from '@angular/core';
import {BaseForm} from '../../base/form/base-form.directive';
import {Transaction} from './transaction';
import {subForm} from '../../base/form/shared/utils';
import {Controls} from '../../base/form/shared/types';

@Component({
  selector: 'mw-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css'],
  providers:[subForm(TransactionComponent)]
})
export class TransactionComponent extends BaseForm<Transaction>{
    protected getControls(): Controls<Transaction> {
        return {
          from: this.fb.control(''),
          to : this.fb.control('')
        }
    }

}


