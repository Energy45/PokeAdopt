import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { PagedAPIResult, Pokemon, PokemonInfo } from './pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokeAPIService {

  constructor(
    private httpClient: HttpClient
  ) {
    // this.fetchPokemons()
    //   // Pipe, sert à appliquer des opérateurs sur un flux/observable
    //   .pipe(
    //     // MergeMap, sert à transformer chaque valeur du flux en appliquant une fonction
    //     // En "écrasant" un observable en retour pour éviter d'avoir un observable d'observable
    //     // On passe de Observable<Observable<Pokemon[]>> à Observable<Pokemon[]>
    //     mergeMap(page => this.fetchFullPokemonForPage(page)),
    //   )
    //   // Et enfin on s'abonne pour afficher les données.
    //   .subscribe(req => console.log(req))
  }

  public fetchFirstPokemonPage(): Observable<Pokemon[]> {
    return this.fetchPokemons()
      // Pipe, sert à appliquer des opérateurs sur un flux/observable
      .pipe(
        // MergeMap, sert à transformer chaque valeur du flux en appliquant une fonction
        // En "écrasant" un observable en retour pour éviter d'avoir un observable d'observable
        // On passe de Observable<Observable<Pokemon[]>> à Observable<Pokemon[]>
        mergeMap(page => this.fetchFullPokemonForPage(page)),
      );
  }

  private fetchPokemons() {
    return this.httpClient
      .get<PagedAPIResult<PokemonInfo>>(`https://pokeapi.co/api/v2/pokemon/`);
  }

  private fetchFullPokemonForPage(page: PagedAPIResult<PokemonInfo>): Observable<Pokemon[]> {
    const array = page.results
      .map(pokeInfo => this.httpClient.get<Pokemon>(pokeInfo.url));

    // Array<Observable<Pokemon>>
    // Observable<Array<Pokemon>>
    return combineLatest(array);
  }
}

