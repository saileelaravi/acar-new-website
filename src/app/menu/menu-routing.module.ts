import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { MessagesComponent } from './messages/messages.component';
import { VisionMisionComponent } from './vision-mision/vision-mision.component';
import { TeachingStaffComponent } from './teaching-staff/teaching-staff.component';
import { NonTeachingStaffComponent } from './non-teaching-staff/non-teaching-staff.component';

const routes: Routes = [
  {path:'contact-us',component:FooterComponent},
  {path:'about-us',component:AboutUsComponent},
  {path:'messages',component:MessagesComponent},
  {path:'vision_mision_goal',component:VisionMisionComponent},
  {path:'teaching_staff',component:TeachingStaffComponent},
  {path:'non_teaching_staff',component:NonTeachingStaffComponent},



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
