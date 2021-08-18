import { TestBed } from '@angular/core/testing';

import { CandlesService } from './candles.service';

describe('CandlesService', () => {
  let service: CandlesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CandlesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
