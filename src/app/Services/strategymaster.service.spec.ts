import { TestBed } from '@angular/core/testing';

import { StrategymasterService } from './strategymaster.service';

describe('StrategymasterService', () => {
  let service: StrategymasterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StrategymasterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
