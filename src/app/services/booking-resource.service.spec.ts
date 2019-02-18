import { TestBed } from '@angular/core/testing';

import { BookingResourceService } from './booking-resource.service';

describe('BookingResourceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookingResourceService = TestBed.get(BookingResourceService);
    expect(service).toBeTruthy();
  });
});
