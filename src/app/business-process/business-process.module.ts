import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BusinessProcessRoutingModule} from './business-process-routing.module';
import { BusinessProcessDetailComponent } from './business-process-detail/business-process-detail.component';
import {BaseModule} from '../base/base.module';
import {ReactiveFormsModule} from '@angular/forms';
import { TransitionComponent } from './transition/transition.component';
import {BusinessProcessService} from './business-process.service';
import { ScriptTaskComponent } from './tasks/script-task/script-task.component';
import {ScriptTaskService} from './tasks/script-task/script-task.service';
import { BusinessProcessListComponent } from './business-process-list/business-process-list.component';
import { TaskListComponent } from './tasks/task-list/task-list.component';

@NgModule({
  declarations: [BusinessProcessDetailComponent,
    TransitionComponent,
    ScriptTaskComponent,
    BusinessProcessListComponent,
    TaskListComponent],
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
