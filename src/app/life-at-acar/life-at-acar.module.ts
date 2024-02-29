import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LifeAtAcarRoutingModule } from './life-at-acar-routing.module';
import { LifeAtAcarService } from './service/life-at-acar.service';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { environment } from '../../environments/environment';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LifeAtAcarRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    HttpClientModule,
    AngularFireStorageModule,
  ],
  providers:[LifeAtAcarService]
})
export class LifeAtAcarModule { }
