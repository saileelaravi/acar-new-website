import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivitesComponent } from './activites.component';
import { PlacementsComponent } from './placements/placements.component';

const routes: Routes = [
  {path:'',component:ActivitesComponent},
  {path:'placements',component:PlacementsComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivitesRoutingModule { }
