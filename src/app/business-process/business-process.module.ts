import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BusinessProcessRoutingModule} from './business-process-routing.module';
import { BusinessProcessComponent } from './business-process.component';

@NgModule({
  declarations: [BusinessProcessComponent],
  imports: [
    BusinessProcessRoutingModule,
    CommonModule
  ]
})
export class BusinessProcessModule { }
