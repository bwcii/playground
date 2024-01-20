import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { IpInfoService } from '../ip-info.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-ip-info',
  standalone: true,
  imports: [
    MatCardModule,
    MatSlideToggleModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [IpInfoService],
  templateUrl: './ip-info.component.html',
  styleUrl: './ip-info.component.css'
})
export class IpInfoComponent {
  checked: boolean = false;
  clientIP = [] as any;

  constructor(private ipInfo: IpInfoService) {}

  getClientIP() {
    this.ipInfo.getClientIP().subscribe(data => {
      console.log(data);
      var returnValue = JSON.stringify(data);
      this.clientIP = returnValue;
      console.log(this.clientIP);
    });
  }

  checkFunction() {
    this.checked = !this.checked;
    if (!this.checked) {
      this.clientIP = [] as any;
    }
    else {
      this.clientIP = this.getClientIP();
    }
  }
}
