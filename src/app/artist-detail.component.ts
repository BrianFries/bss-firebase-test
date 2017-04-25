import { Component } from '@angular/core';
import { Router }    from '@angular/router';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
    moduleId: module.id,
    selector: 'artist-list',
    templateUrl: './artist-list.component.html',
    styleUrls: [ './artist-list.component.css' ]
})
export class ArtistAddComponent {
  artists: FirebaseListObservable<any[]>;
  constructor(af: AngularFire) {
    this.artists = af.database.list('/artists');
  }
}
