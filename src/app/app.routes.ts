import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../app/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('../app/menu/menu.module').then(m => m.MenuModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('../app/welcome/welcome.module').then(m => m.WelcomeModule)
  },
  {
    path: 'activites',
    loadChildren: () => import('../app/activites/activites.module').then(m => m.ActivitesModule)
  },
  {
    path: 'youtube',
    loadChildren: () => import('../app/you-tube-videos/you-tube-videos.module').then(m => m.YouTubeVideosModule)
  },
  {
    path: 'campus',
    loadChildren: () => import('../app/campus/campus.module').then(m => m.CampusModule)
  },
  {
    path: 'events',
    loadChildren: () => import('../app/events/events.module').then(m => m.EventsModule)
  },
  {
    path: 'departments',
    loadChildren: () => import('../app/departments/departments.module').then(m => m.DepartmentsModule)
  },
  {
    path: 'academics',
    loadChildren: () => import('../app/academics/academics.module').then(m => m.AcademicsModule)
  },
  {
    path: 'life-at-acar',
    loadChildren: () => import('../app/life-at-acar/life-at-acar.module').then(m => m.LifeAtAcarModule)
  },
  {
    path: 'contact-us',
    loadChildren: () => import('../app/contact-us/contact-us.module').then(m => m.ContactUsModule)
  }
];
