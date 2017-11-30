import { TestBed, inject } from '@angular/core/testing';

import { PoliticiansService } from './politicians.service';

describe('PoliticiansService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PoliticiansService]
    });
  });

  it('should be created', inject([PoliticiansService], (service: PoliticiansService) => {
    expect(service).toBeTruthy();
  }));
});
