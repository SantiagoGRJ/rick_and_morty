import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { CharactersDetailsComponent } from './pages/characters-details/characters-details.component';
import { EpisodesComponent } from './pages/episodes/episodes.component';
import { EpisodesDetailsComponent } from './pages/episodes-details/episodes-details.component';
import { LocationsComponent } from './pages/locations/locations.component';
import { LocationsDetailsComponent } from './pages/locations-details/locations-details.component';

export const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'characters', component:CharactersComponent},
  {path:'characters/:id',component:CharactersDetailsComponent},

  {path:'episodes', component:EpisodesComponent},
  {path:'episodes/:id',component:EpisodesDetailsComponent},

  {path:'locations',component:LocationsComponent},
  {path:'locations/:id', component:LocationsDetailsComponent},

  {path:'**', redirectTo:'',pathMatch:"full"}
];
