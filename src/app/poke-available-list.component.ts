import { Component, OnInit } from '@angular/core';
import { AdoptPokeService } from './adopt-poke.service';
import { PokeAPIService } from './poke-api.service';
import { IPokemon, Pokemon } from './pokemon';

@Component({
  selector: 'app-poke-available-list',
  template: `
    <div class="pokeListContainer">
      <div class="contenerGrid">
        <ng-template ngFor let-pokeItem [ngForOf]="pokeList">
          <div class="cardStyle wrapStyle">
            <app-poke-available-item [pokemon]="pokeItem"></app-poke-available-item>
          </div>
        </ng-template>
      </div>
    </div>
  `,
  styles: [`
    .contenerGrid {
      display: grid;
      align-items: center;
      gap: 50px;
      grid-template-columns: 1fr 1fr;
    }

    .pokeListContainer {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      align-content: flex-start;
      align-items: center;
      background-color: #F6F6F7;
      padding: 20px;
    }
    
    .cardStyle {
      width: 300px;
      height: 250px
    }

    .wrapStyle {
      word-break: break-all;
      padding: 32px;
    }


    @media (max-width: 720px) {  
      .contenerGrid{
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class PokeAvailableListComponent {
  pokeAPIService: PokeAPIService

  public pokeList: Pokemon[] = []

  constructor(
    _pokeAPIService: PokeAPIService
  ) {
    this.pokeAPIService = _pokeAPIService

    this.pokeAPIService.fetchFirstPokemonPage().subscribe(pokemonList => this.pokeList = pokemonList)

    // this.pokeAPIService.pokemons.subscribe(newAdoptPokeList => )
  }

}
