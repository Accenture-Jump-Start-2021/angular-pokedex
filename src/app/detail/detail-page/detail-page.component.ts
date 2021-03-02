import { Component } from '@angular/core';
import { PokemonDetail, SinglePokemonService } from '../../single-pokemon.service';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, map, pluck, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})
export class DetailPageComponent {
  id$: Observable<string> = this.activatedRoute.queryParams.pipe(pluck('id'), filter(Boolean)) as Observable<string>;
  pokemon$: Observable<PokemonDetail> = this.id$.pipe(switchMap(id => this.singlePokemonService.getPokemon(id)));
  src$: Observable<string> = this.pokemon$.pipe(map(pokemon => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`));
  name$: Observable<string> = this.pokemon$.pipe(pluck('name'));

  constructor(private router: Router, private singlePokemonService: SinglePokemonService, private activatedRoute: ActivatedRoute) {
  }

  updateQueryParam(search: string): void {
    this.router.navigate(
      [],
      {
        relativeTo: this.activatedRoute,
        queryParams: {id: search},
        queryParamsHandling: 'merge'
      });
  }
}

