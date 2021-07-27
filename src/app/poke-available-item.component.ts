import { Component, Input} from '@angular/core';
import { AdoptPokeService } from './adopt-poke.service';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-poke-available-item',
  template: `
    <div class="containerItem">
      <p class="pokemonName">{{pokemon.name}}</p>
      <div class="pokemonInformations">
        <div class="pokemonLeftContainer">
          <p>Types :</p>
          <mat-list>
            <ng-template ngFor let-type [ngForOf]="pokemon.types">
              <mat-list-item>
                {{type.type.name}}
              </mat-list-item>
            </ng-template>
          </mat-list>
         

          <p>Abilities :</p>
          <mat-list>
            <ng-template ngFor let-ability [ngForOf]="pokemon.abilities">
              <mat-list-item>
                {{ability.ability.name}}
              </mat-list-item>
            </ng-template>
          </mat-list>

          <p>Weigth : {{pokemon.weight}} Kg</p>
        </div>
        <div class="pokemonRightContainer">
          <img [src]="pokemon.sprites.other['official-artwork'].front_default" />

          <button *ngIf="isAdopt === false" mat-raised-button color="primary" (click)="adoptPokemon()">ADOPT</button>
          <button *ngIf="isAdopt === true" mat-raised-button  color="secondary" (click)="unadoptPokemon()">UNADOPT</button>
        </div>
      </div>
      
    </div>
  `,
  styles: [`
    .containerItem {
      display: flex;
      flex-direction: column;
      height: 225px;
      box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
      transition: 0.3s;
      padding: 16px;
      border-radius: 40px;
      background-color: #FFFFFF;
    }

    .containerItem:hover{
      box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }

    .pokemonName {
      flex: 1;
      font-size: 24px;
      color: #EF5350;
      font-weight: bold;
      text-align :center;
    }

    .pokemonInformations {
      display: flex;
      flex: 3;
      flex-direction: row;
      justify-content: space-around;
    }

    .pokemonRightContainer {
      display: flex;
      flex-direction: column;
      justify-content: space-between
    }

    .pokemonRightContainer img{
      width: 100%;
      max-width: 100px;
    }

    .pokemonLeftContainer {
      display: flex;
      flex-direction: column;
    }

    .mat-list-item {
      height: 30px !important;
    }

    .mat-list-base {
      padding-top: 0;
    }

    .btn_adopt_false{
      background-color: #3761A8 !important;
    }

    p {
      margin: 0; 
      font-weight: 500;
    }

    ul {
      margin: 0;
    }
  `]
})
export class PokeAvailableItemComponent {
  
  @Input() pokemon!: Pokemon

  private _adoptPokeService: AdoptPokeService

  isAdopt: boolean = false

  constructor(
    adoptPokeService: AdoptPokeService
  ) { 
    this._adoptPokeService = adoptPokeService

    this._adoptPokeService.pokemons.subscribe((pokemons: Pokemon[]) => {
      if(pokemons.filter((pokemonCurrent: Pokemon) => this.pokemon.id === pokemonCurrent.id).length === 0) {
        this.isAdopt = false
      } else {
        this.isAdopt = true
      }
    })
  }

  adoptPokemon() {
    this._adoptPokeService.addPokemonAdopt(this.pokemon)
  }

  unadoptPokemon() {
    this._adoptPokeService.deletePokemonAdopt(this.pokemon.id)
  }
}
