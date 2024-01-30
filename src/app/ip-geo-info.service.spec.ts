import { TestBed } from '@angular/core/testing';

import { IpGeoInfoService } from './ip-geo-info.service';

describe('IpGeoInfoService', () => {
  let service: IpGeoInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IpGeoInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
