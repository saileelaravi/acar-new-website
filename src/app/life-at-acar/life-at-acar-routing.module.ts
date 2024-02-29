import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HostelComponent } from './hostel/hostel.component';
import { YogaComponent } from './yoga/yoga.component';
import { TrainingsAndEventsComponent } from './events/trainings-and-events/trainings-and-events.component';
import { FunctionsComponent } from './events/functions/functions.component';
import { SportsComponent } from './events/sports/sports.component';
import { LibraryComponent } from './facilities/library/library.component';
import { ItLabComponent } from './facilities/it-lab/it-lab.component';

const routes: Routes = [
{path:'hostel',component:HostelComponent},
{path:'yoga',component:YogaComponent},
{path:'trainings-and-events',component:TrainingsAndEventsComponent},
{path:'Functions',component:FunctionsComponent},
{path:'Sports',component:SportsComponent},
{path:'Library',component:LibraryComponent},
{path:'IT-Lab',component:ItLabComponent},



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LifeAtAcarRoutingModule { }
