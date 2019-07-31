import { TestBed } from '@angular/core/testing';

import { AttendeeApiService } from './attendee-api.service';

describe('AttendeeApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AttendeeApiService = TestBed.get(AttendeeApiService);
    expect(service).toBeTruthy();
  });
});
