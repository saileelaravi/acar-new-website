import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CampusRoutingModule } from './campus-routing.module';
import { environment } from '../../environments/environment';
import { AngularFireModule } from '@angular/fire/compat'


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CampusRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ]
})
export class CampusModule { }
