import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IPokemon, Pokemon } from './pokemon';

@Injectable({
  providedIn: 'root'
})
export class AdoptPokeService {
  private _pokemons: BehaviorSubject<Pokemon[]> = new BehaviorSubject<Pokemon[]>([])

  public pokemons = this._pokemons.asObservable()

  constructor() { }

  addPokemonAdopt(pokemon: Pokemon): void {
    this._pokemons.getValue().push(pokemon)

    this._pokemons.next(this._pokemons.getValue())
  }

  deletePokemonAdopt(id: number): void {
    let newPokemonAdoptArray: Pokemon[] = this._pokemons.getValue().filter((pokemon: Pokemon) => id !== pokemon.id)

    this._pokemons.next(newPokemonAdoptArray)
  }

  adoptThemAll(): void {

  }
}
