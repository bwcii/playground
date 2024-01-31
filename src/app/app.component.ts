import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ReverseTextComponent } from './reverse-text/reverse-text.component';
import { RandomCatComponent } from './random-cat/random-cat.component';
import { IpInfoComponent } from './ip-info/ip-info.component';
import { IpGeoInfoComponent } from './ip-geo-info/ip-geo-info.component';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1ZemmksnwuxZA_yHXGAsUEWwYkyvSDOg",
  authDomain: "angularplayground-410317.firebaseapp.com",
  projectId: "angularplayground-410317",
  storageBucket: "angularplayground-410317.appspot.com",
  messagingSenderId: "443072296089",
  appId: "1:443072296089:web:96a0c73a64130a11f03408",
  measurementId: "G-837XB1R1RX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet,
    MatToolbarModule,
    MatInputModule,
    MatSelectModule,
    ReverseTextComponent,
    RandomCatComponent,
    IpInfoComponent,
    IpGeoInfoComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular Playground';
}
