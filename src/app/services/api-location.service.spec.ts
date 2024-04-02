import { TestBed } from '@angular/core/testing';

import { ApiLocationService } from './api-location.service';

describe('ApiLocationService', () => {
  let service: ApiLocationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiLocationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
