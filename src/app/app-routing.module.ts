import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArtistListComponent }  from './artist-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/artists', pathMatch: 'full' },
  { path: 'artists',     component: ArtistListComponent },
  { path: '**', redirectTo: '/artists'}
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
