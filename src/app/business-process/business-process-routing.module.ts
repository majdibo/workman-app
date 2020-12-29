import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BusinessProcessDetailComponent} from './business-process-detail/business-process-detail.component';
import {BusinessProcessListComponent} from './business-process-list/business-process-list.component';
import {TaskListComponent} from './tasks/task-list/task-list.component';
import {ScriptTaskComponent} from './tasks/script-task/script-task.component';


const routes: Routes = [
  { path: '', component: BusinessProcessListComponent },
  { path: 'definition', component: BusinessProcessDetailComponent },
  { path: 'tasks', component: TaskListComponent },
  { path: 'tasks/script', component: ScriptTaskComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessProcessRoutingModule { }
