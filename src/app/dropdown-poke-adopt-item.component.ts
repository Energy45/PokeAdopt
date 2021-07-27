import { Component, Input, OnInit } from '@angular/core';
import { AdoptPokeService } from './adopt-poke.service';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-dropdown-poke-adopt-item',
  template: `
        <div *ngIf="pokemon === undefined">
          <button mat-menu-item>
            <div>
              No Pokemon
            </div>
          </button>
        </div>

        <div *ngIf="pokemon !== undefined">
          <div mat-menu-item id="btn_drop">
            <img style="max-width: 20px;" [src]="pokemon.sprites.other['official-artwork'].front_default" />
            <div>
              {{pokemon.name}}
            </div>
            <button mat-icon-button   class="example-icon" (click)="unadoptPokemon()"></button>
            <mat-icon aria-hidden="false" aria-label="delete">Delete</mat-icon>
          </div>
        </div>
  `,
  styles: [`
      #btn_drop {
      display: flex;
      align-items: center;
      gap: 6px;
      }
  `]
})
export class DropdownPokeAdoptItemComponent {
  private _adoptPokeService: AdoptPokeService

  @Input() pokemon!: Pokemon

  constructor(
    adoptPokeService: AdoptPokeService
    ) 
    { 
      this._adoptPokeService = adoptPokeService
    }

  unadoptPokemon() {
    this._adoptPokeService.deletePokemonAdopt(this.pokemon.id)
  }

}
