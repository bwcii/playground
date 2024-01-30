import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface Currency {
  code: String,
  name: String,
  symbol: String,
}

// Time_Zone struct
export interface TimeZone {
  name: String,
  offset: number,
  current_time: String,
  current_time_unix: number,
  is_dst: boolean,
  dst_savings: number,
}

export interface IPGeoResponse {
  ip: String,
        continent_code: String,
        continent_name: String,
        country_code2: String,
        country_code3: String,
        country_name: String,
        country_capital: String,
        state_prov: String,
        district: String,
        city: String,
        zipcode: String,
        latitude: String,
        longitude: String,
        is_eu: boolean,
        calling_code: String,
        country_tld: String,
        languages: String,
        country_flag: String,
        geoname_id: String,
        isp: String,
        connection_type: String,
        organization: String,
        currency: Currency,
        time_zone: TimeZone,
}

@Injectable({
  providedIn: 'root'
})
export class IpGeoInfoService {
  apiURL = "https://myip.bwcii.com/v1/ipgeo"

  constructor(private http: HttpClient) { }

  getClientIPGeoInfo(): Observable<IPGeoResponse> {
    return this.http.get<IPGeoResponse>(this.apiURL);
  }
}