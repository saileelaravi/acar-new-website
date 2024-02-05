import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { YoutbueVideosComponent } from './youtbue-videos/youtbue-videos.component';

const routes: Routes = [
  {path:'',component:YoutbueVideosComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class YouTubeVideosRoutingModule { }
