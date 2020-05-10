import { TestBed } from '@angular/core/testing';

import { SadminService } from './sadmin.service';

describe('SadminService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SadminService = TestBed.get(SadminService);
    expect(service).toBeTruthy();
  });
});
