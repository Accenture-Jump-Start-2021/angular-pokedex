import { Injectable } from '@angular/core';
import { pluck } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

interface Response {
  count: number;
  next: string;
  previous?: any;
  results: Pokemon[];
}

export interface Pokemon {
  name: string;
  url: string;
}

@Injectable({
  providedIn: 'root'
})
export class AllPokemonService {
  allPokemon$ = this.http.get<Response>('https://pokeapi.co/api/v2/pokemon?limit=151').pipe(pluck('results'));

  constructor(private http: HttpClient) { }
}
