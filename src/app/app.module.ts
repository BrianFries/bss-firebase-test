import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ArtistListComponent }   from './artist-list.component';

// Must export the config
export const firebaseConfig = {
    apiKey: "AIzaSyCbvvhypHZAA8bggDnqXMsiCZWPoIW6iJ0",
    authDomain: "bss-firebase-test.firebaseapp.com",
    databaseURL: "https://bss-firebase-test.firebaseio.com",
    projectId: "bss-firebase-test",
    storageBucket: "bss-firebase-test.appspot.com",
    messagingSenderId: "1068117699300"
};

@NgModule({
  declarations: [
    AppComponent,
    ArtistListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
