import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivitesRoutingModule } from './activites-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { environment } from '../../environments/environment';
import { ActivitesService } from './service/activites.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ActivitesRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    HttpClientModule,
    AngularFireStorageModule,
  ],
  providers:[ActivitesService]
})
export class ActivitesModule { }
