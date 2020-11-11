import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BusinessProcessRoutingModule} from './business-process-routing.module';
import { BusinessProcessComponent } from './business-process.component';
import {BaseModule} from '../base/base.module';
import {ReactiveFormsModule} from '@angular/forms';
import { TransitionComponent } from './transition/transition.component';
import {BusinessProcessService} from './business-process.service';
import { ScriptTaskComponent } from './tasks/script-task/script-task.component';
import {ScriptTaskService} from './tasks/script-task/script-task.service';

@NgModule({
  declarations: [BusinessProcessComponent, TransitionComponent, ScriptTaskComponent],
  imports: [
    BusinessProcessRoutingModule,
    CommonModule,
    BaseModule,
    ReactiveFormsModule
  ],
  providers:[
    BusinessProcessService,
    ScriptTaskService
  ]
})
export class BusinessProcessModule { }
