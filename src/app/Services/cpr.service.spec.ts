import { TestBed } from '@angular/core/testing';

import { CprService } from './cpr.service';

describe('CprService', () => {
  let service: CprService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CprService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
