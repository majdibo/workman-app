import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BusinessProcessRoutingModule} from './business-process-routing.module';
import { BusinessProcessComponent } from './business-process.component';
import {BaseModule} from '../base/base.module';
import {ReactiveFormsModule} from '@angular/forms';
import { TransitionComponent } from './transition/transition.component';
import {BusinessProcessService} from './business-process.service';

@NgModule({
  declarations: [BusinessProcessComponent, TransitionComponent],
  imports: [
    BusinessProcessRoutingModule,
    CommonModule,
    BaseModule,
    ReactiveFormsModule
  ],
  providers:[
    BusinessProcessService
  ]
})
export class BusinessProcessModule { }
