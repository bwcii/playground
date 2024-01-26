import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-ip-geo-info',
  standalone: true,
  imports: [
    MatCardModule,
    MatSlideToggleModule,
    CommonModule
  ],
  templateUrl: './ip-geo-info.component.html',
  styleUrl: './ip-geo-info.component.css'
})
export class IpGeoInfoComponent {

  checked: boolean = false;

  checkFunction() {
    this.checked = !this.checked;
  }
}
