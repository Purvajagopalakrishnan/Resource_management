import { TestBed } from '@angular/core/testing';

import { MobileListService } from './mobile-list.service';

describe('MobileListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MobileListService = TestBed.get(MobileListService);
    expect(service).toBeTruthy();
  });
});
