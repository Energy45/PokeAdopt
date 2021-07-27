import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { PokeAvailableListComponent } from './poke-available-list.component';
import { PokeAvailableItemComponent } from './poke-available-item.component';
import { HeaderComponent } from './header.component';
import { DropdownPokeAdoptComponent } from './dropdown-poke-adopt.component';
import { AdoptCartComponent } from './adopt-cart.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { DropdownPokeAdoptItemComponent } from './dropdown-poke-adopt-item.component'; 

@NgModule({
  declarations: [
    AppComponent,
    PokeAvailableListComponent,
    PokeAvailableItemComponent,
    HeaderComponent,
    DropdownPokeAdoptComponent,
    AdoptCartComponent,
    DropdownPokeAdoptItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
