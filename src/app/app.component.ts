import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './menu/footer/footer.component';
import { HeaderComponent } from './menu/header/header.component';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FooterComponent,HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor() {
    // Initialize Firebase with your configuration
    firebase.initializeApp(environment.firebaseConfig);

    // Now you can use Firebase services like Firestore, Authentication, etc.
  }
  title = 'website';
}
