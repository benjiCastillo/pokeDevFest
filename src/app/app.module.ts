import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//forms
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//importa el core de firebase necesaria para todo
import { AngularFireModule } from '@angular/fire';

import { environment } from '../environments/environment';
//importa solo  caracteristicas de base de datos
import { AngularFirestoreModule } from '@angular/fire/firestore';
//importar angular material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
//modulo de material module
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
