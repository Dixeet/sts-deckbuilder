import { TestBed, inject } from '@angular/core/testing';

import { AbstractDataService } from './abstract-data.service';

describe('AbstractDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AbstractDataService]
    });
  });

  it('should be created', inject([AbstractDataService], (service: AbstractDataService) => {
    expect(service).toBeTruthy();
  }));
});
