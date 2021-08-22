import { TestBed } from '@angular/core/testing';

import { RuneodService } from './runeod.service';

describe('RuneodService', () => {
  let service: RuneodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RuneodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
