import { TestBed } from '@angular/core/testing';

import { IntersectionServiceService } from './intersection.service';

describe('IntersectionServiceService', () => {
  let service: IntersectionServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IntersectionServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
