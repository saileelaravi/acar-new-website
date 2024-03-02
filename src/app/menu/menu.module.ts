import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireStorage, AngularFireStorageModule } from '@angular/fire/compat/storage';
import { environment } from '../../environments/environment';
import { MenuService } from './service/menu.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MenuRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    HttpClientModule,
  ],
  providers: [AngularFireStorage,MenuService ],
  

})
export class MenuModule { }
