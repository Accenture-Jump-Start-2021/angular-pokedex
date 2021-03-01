import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomPokemonService {
  numberOfPokemons = 151;

  getRandomPokemon(): number {
    return Math.floor(Math.random() * Math.floor(this.numberOfPokemons));
  }
}
