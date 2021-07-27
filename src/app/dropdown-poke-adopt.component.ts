import { Component, OnInit } from '@angular/core';
import { AdoptPokeService } from './adopt-poke.service';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-dropdown-poke-adopt',
  template: `
  <mat-toolbar color="primary">
    <mat-toolbar-row>
      <span>PokeStart</span>
      <span class="example-spacer"></span>
      <button mat-button class="example-icon" [matMenuTriggerFor]="menu">{{this.pokeAdoptList.length}} adopted</button>
      <mat-menu #menu="matMenu">
        <div *ngIf="pokeAdoptList.length === 0">
          <button mat-menu-item>
            <div>
              No Pokemon
            </div>
          </button>
        </div>
        <ng-template ngFor let-pokeItem [ngForOf]="pokeAdoptList">
          <app-dropdown-poke-adopt-item [pokemon]="pokeItem"></app-dropdown-poke-adopt-item>
        </ng-template>
      </mat-menu>

    </mat-toolbar-row>
  </mat-toolbar>
  `,

  styles: [`
  .example-spacer {
    flex: 1 1 auto;
  }

  #btn_drop {
    display: flex;
    align-items: center;
    gap: 6px;
  }
  `]
})
export class DropdownPokeAdoptComponent  {

  private _adoptPokeService: AdoptPokeService

  pokeAdoptList: Pokemon[] = []

  constructor(
    adoptPokeService: AdoptPokeService
  ) {
   this._adoptPokeService = adoptPokeService

   this._adoptPokeService.pokemons.subscribe((pokemon: Pokemon[]) => {
    this.pokeAdoptList = pokemon
   })

   console.log(this.pokeAdoptList)
  }
}
