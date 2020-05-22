import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BusinessProcessComponent} from './business-process.component';


const routes: Routes = [

  {
    path: '', component: BusinessProcessComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessProcessRoutingModule { }
