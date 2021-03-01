import { TestBed } from '@angular/core/testing';

import { AllPokemonService } from './all-pokemon.service';

describe('AllPokemonService', () => {
  let service: AllPokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllPokemonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
