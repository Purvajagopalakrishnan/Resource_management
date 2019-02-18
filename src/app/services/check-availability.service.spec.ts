import { TestBed } from '@angular/core/testing';

import { CheckAvailabilityService } from './check-availability.service';

describe('CheckAvailabilityService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CheckAvailabilityService = TestBed.get(CheckAvailabilityService);
    expect(service).toBeTruthy();
  });
});
