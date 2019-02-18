import { TestBed } from '@angular/core/testing';

import { LaptopListService } from './laptop-list.service';

describe('LaptopListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LaptopListService = TestBed.get(LaptopListService);
    expect(service).toBeTruthy();
  });
});
