import { TestBed } from '@angular/core/testing';

import { RuneodscreenerService } from './runeodwebsocket';

describe('RuneodscreenerService', () => {
  let service: RuneodscreenerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RuneodscreenerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
