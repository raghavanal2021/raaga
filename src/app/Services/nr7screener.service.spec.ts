import { TestBed } from '@angular/core/testing';

import { Nr7screenerService } from './nr7screener.service';

describe('Nr7screenerService', () => {
  let service: Nr7screenerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Nr7screenerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
