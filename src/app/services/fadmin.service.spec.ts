import { TestBed } from '@angular/core/testing';

import { FadminService } from './fadmin.service';

describe('FadminService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FadminService = TestBed.get(FadminService);
    expect(service).toBeTruthy();
  });
});
