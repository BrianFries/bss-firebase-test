import { Component } from '@angular/core';
import { Router }    from '@angular/router';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
    moduleId: module.id,
    selector: 'artist-list',
    templateUrl: './artist-list.component.html',
    styleUrls: [ './artist-list.component.css' ]
})
export class ArtistListComponent {
  artists: FirebaseListObservable<any[]>;
  constructor(af: AngularFire) {
    this.artists = af.database.list('/artists');
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.artists.push({ title: name, genre: 'unspecified' })
  }

}
