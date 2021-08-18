import { TestBed } from '@angular/core/testing';

import { OpeningrangeService } from './openingrange.service';

describe('OpeningrangeService', () => {
  let service: OpeningrangeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpeningrangeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
