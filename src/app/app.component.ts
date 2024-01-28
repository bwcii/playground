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
import { TableBasicExampleComponent } from './table-basic-example/table-basic-example.component';

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
    IpGeoInfoComponent,
    TableBasicExampleComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular Playground';
}
