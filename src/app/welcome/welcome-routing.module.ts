import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Welcome2acarComponent } from './welcome2acar/welcome2acar.component';

const routes: Routes = [
  {path:'',component:Welcome2acarComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WelcomeRoutingModule { }
