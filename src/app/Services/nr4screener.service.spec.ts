import { TestBed } from '@angular/core/testing';

import { Nr4screenerService } from './nr4screener.service';

describe('Nr4screenerService', () => {
  let service: Nr4screenerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Nr4screenerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
