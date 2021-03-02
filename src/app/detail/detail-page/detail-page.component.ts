import { Component, OnInit } from '@angular/core';
import { SinglePokemonService } from '../../single-pokemon.service';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, pluck } from 'rxjs/operators';


@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})
export class DetailPageComponent implements OnInit {
  src = '';
  name = '';

  constructor(private router: Router, private singlePokemonService: SinglePokemonService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.pipe(pluck('id'), filter(Boolean)).subscribe(id => this.search(id as string));
  }

  search(search: string): void {
    this.singlePokemonService.getPokemon(search).subscribe(pokemon => {
      this.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;
      this.name = pokemon.name;
    });
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
