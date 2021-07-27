import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-dropdown-poke-adopt></app-dropdown-poke-adopt>
    <app-poke-available-list></app-poke-available-list>
  `,
  styles: ['']
})
export class AppComponent {
  title = 'PokeAdopt';
}
