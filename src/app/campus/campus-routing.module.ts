import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampusComponent } from './campus/campus.component';
import { LaboratriesComponent } from './laboratries/laboratries.component';

const routes: Routes = [
  {path:'',component:CampusComponent},
  {path:'labs',component:LaboratriesComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CampusRoutingModule { }
