import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BusinessProcessComponent} from './business-process.component';
import {ScriptTaskComponent} from './tasks/script-task/script-task.component';


const routes: Routes = [
  { path: '', component: BusinessProcessComponent },
  { path: 'tasks/script', component: ScriptTaskComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessProcessRoutingModule { }
