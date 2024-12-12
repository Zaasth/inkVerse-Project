import { Routes } from '@angular/router';
import { ErrorComponent } from './components/error/error.component';
import { HomeComponent } from './components/home/home.component';
import { ArtistPageComponent } from './components/artist-page/artist-page.component'; 

export const routes: Routes = [
    { path: 'artist/:id', component: ArtistPageComponent },
    { path: '', component: HomeComponent },
    { path: '**', component: ErrorComponent },
    
];
