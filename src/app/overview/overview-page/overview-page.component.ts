import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RandomPokemonService } from '../random-pokemon.service';
import { AllPokemonService, Pokemon } from '../all-pokemon.service';



@Component({
  selector: 'app-overview-page',
  templateUrl: './overview-page.component.html',
  styleUrls: ['./overview-page.component.scss']
})
export class OverviewPageComponent {
  public pokemons$: Observable<Pokemon[]> = this.allPokemonService.allPokemon$;

  randomPokemon: number = this.randomPokemonService.getRandomPokemon();

  constructor(private randomPokemonService: RandomPokemonService, private allPokemonService: AllPokemonService) {}
}
