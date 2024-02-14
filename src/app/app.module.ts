import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireStorage, AngularFireStorageModule } from '@angular/fire/compat/storage';
import { MenuService } from './menu/service/menu.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    HttpClientModule,
  ],

  providers: [AngularFireStorage],
})
export class AppModule { }
