import { TestBed } from '@angular/core/testing';

import { WeaponsApiService } from './weapons-api.service';

describe('WeaponsApiService', () => {
  let service: WeaponsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeaponsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
