import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BusinessProcessRoutingModule} from './business-process-routing.module';
import { BusinessProcessComponent } from './business-process.component';
import {BaseModule} from '../base/base.module';
import {ReactiveFormsModule} from '@angular/forms';
import { TransactionComponent } from './transaction/transaction.component';

@NgModule({
  declarations: [BusinessProcessComponent, TransactionComponent],
  imports: [
    BusinessProcessRoutingModule,
    CommonModule,
    BaseModule,
    ReactiveFormsModule
  ]
})
export class BusinessProcessModule { }
