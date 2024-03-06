import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampusComponent } from './campus/campus.component';
import { LaboratriesComponent } from './laboratries/laboratries.component';
import { GuestLecturesComponent } from './guest-lectures/guest-lectures.component';
import { FieldVistAndTourComponent } from './field-vist-and-tour/field-vist-and-tour.component';

const routes: Routes = [
  {path:'',component:CampusComponent},
  {path:'labs',component:LaboratriesComponent},
  {path:'gis-guest-lecture',component:GuestLecturesComponent},
  {path:'field-visit-and-all-india-tour',component:FieldVistAndTourComponent},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CampusRoutingModule { }
