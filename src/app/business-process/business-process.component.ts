import {Component} from '@angular/core';
import {BaseForm} from '../base/form/base-form.directive';
import {Controls} from '../base/form/shared/types';
import {Transaction} from './transaction/transaction';

@Component({
  selector: 'mw-business-process',
  templateUrl: 'business-process.component.html',
  styleUrls: ['business-process.component.css']
})
export class BusinessProcessComponent extends BaseForm<BusinessProcess> {

  ngOnInit() {
    super.ngOnInit();
  }

  protected getControls(): Controls<BusinessProcess> {
    return {
      name: this.fb.control(''),
      transactions: this.fb.array([])
    };
  }

  sayHello() {
    console.log(this.formGroup.value);
  }

  addTransaction() {
    this.arrays.transactions.push(this.fb.control({}));
  }

}

class BusinessProcess {
  name: string;
  transactions: Transaction[];
}
