import { TestBed } from '@angular/core/testing';

import { VadminService } from './vadmin.service';

describe('VadminService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VadminService = TestBed.get(VadminService);
    expect(service).toBeTruthy();
  });
});
