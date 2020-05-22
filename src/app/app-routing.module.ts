import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BusinessProcessModule} from './business-process/business-process.module';


const routes: Routes = [

  {path: 'process', loadChildren: () => BusinessProcessModule}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
