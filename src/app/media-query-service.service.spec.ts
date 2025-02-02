import { TestBed } from '@angular/core/testing';

import { MediaQueryServiceService } from './media-query-service.service';

describe('MediaQueryServiceService', () => {
  let service: MediaQueryServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MediaQueryServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
