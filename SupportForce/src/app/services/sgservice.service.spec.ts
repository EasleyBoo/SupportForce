import { TestBed } from '@angular/core/testing';

import { SgserviceService } from './sgservice.service';

describe('SgserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SgserviceService = TestBed.get(SgserviceService);
    expect(service).toBeTruthy();
  });
});
