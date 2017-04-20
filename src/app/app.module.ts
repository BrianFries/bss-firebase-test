import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';

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
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
