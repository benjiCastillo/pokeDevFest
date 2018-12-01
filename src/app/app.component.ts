import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import *  as pokemonGif from 'pokemon-gif';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private pokemonsCollection: AngularFirestoreCollection<any>;
  pokemons: Observable<any[]>;
  name: string;
  title = 'PokeDevFest2018';

  constructor(db: AngularFirestore) {
    //llamada a colleccion de pokemons
    this.pokemons = db.collection('pokemons').valueChanges();
    this.pokemonsCollection = db.collection<any>('pokemons');
  }
  

  save(): void {
    console.log(this.name);
    this.pokemonsCollection.add({ "name": this.name });
  }
  getPokemonGif(name: string): string {
    return pokemonGif(name);
  }
}
