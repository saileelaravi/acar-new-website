import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentsRoutingModule } from './departments-routing.module';
import { AngularFireModule, FIREBASE_OPTIONS } from '@angular/fire/compat';
import { environment } from '../../environments/environment';
import { GalleriaModule } from 'primeng/galleria';
import { ImageModule } from 'primeng/image';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { HttpClientModule } from '@angular/common/http';
import { DepartmentService } from './service/department.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DepartmentsRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    HttpClientModule,
    AngularFireStorageModule,
    
  ],
  providers: [
    // AngularFireDatabase,
    DepartmentService
  ],
})
export class DepartmentsModule { }
