import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IpInfoService {

  apiURL = 'https://myip.bwcii.com';

  constructor(private http: HttpClient) { }

  getClientIP(): Observable<IpInfo> {
    return this.http.get<IpInfo>(`${this.apiURL}/v1/ip`);
  }
}

export interface IpInfo {
  ip_address: string;
}