import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentsRoutingModule } from './departments-routing.module';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../../environments/environment';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DepartmentsRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ]
})
export class DepartmentsModule { }
