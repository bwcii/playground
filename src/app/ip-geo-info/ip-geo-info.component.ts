import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CommonModule } from '@angular/common';
import { MatTableModule }from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { IpGeoInfoService } from '../ip-geo-info.service';
import { HttpClientModule } from '@angular/common/http';

export interface IPGeoTableInfo {
  IP_Property: String;
  IP_Attribute: String;
}

@Component({
  selector: 'app-ip-geo-info',
  standalone: true,
  imports: [
    MatCardModule,
    MatSlideToggleModule,
    CommonModule,
    MatTableModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [IpGeoInfoService],
  templateUrl: './ip-geo-info.component.html',
  styleUrl: './ip-geo-info.component.css'
})
export class IpGeoInfoComponent {
  checked: boolean = false;
  tableready: boolean = false;

  table_data: IPGeoTableInfo[] = [
    {"IP_Property": "IP Address", "IP_Attribute": ""},
    {"IP_Property": "ISP", "IP_Attribute": ""},
    {"IP_Property": "Country", "IP_Attribute": ""},
    {"IP_Property": "State", "IP_Attribute": ""},
    {"IP_Property": "City", "IP_Attribute": ""},
    {"IP_Property": "Zip Code", "IP_Attribute": ""},
  ];
  
  constructor(private ipGeoInfoService: IpGeoInfoService) { }

  getClientIPGeoInfo() {
    this.ipGeoInfoService.getClientIPGeoInfo().subscribe( data => {
      this.table_data[0].IP_Attribute = data.ip;
      this.table_data[1].IP_Attribute = data.isp;
      this.table_data[2].IP_Attribute = data.country_name;
      this.table_data[3].IP_Attribute = data.state_prov;
      this.table_data[4].IP_Attribute = data.city;
      this.table_data[5].IP_Attribute = data.zipcode;
    })
  }

  checkFunction() {
    this.checked = !this.checked;
    if (!this.checked) {
      this.tableready = false;
    }
  }

  dataSource = this.table_data;
  displayedColumns: string[] = ['IP_Property', 'IP_Attribute'];

  getClientIPGeo() {
    this.tableready = true;
    let stats = this.getClientIPGeoInfo();
  }
}