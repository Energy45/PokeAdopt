import { TestBed } from '@angular/core/testing';

import { AdoptPokeService } from './adopt-poke.service';

describe('AdoptPokeService', () => {
  let service: AdoptPokeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdoptPokeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
