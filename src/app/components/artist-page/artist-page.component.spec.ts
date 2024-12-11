import { Component } from '@angular/core';

export interface Artista {
  img: string;
  nome: string;
  cargo: string;
}

@Component({
  selector: 'app-artist-page',
  templateUrl: './artist-page.component.html',
  styleUrls: ['./artist-page.component.css']
})
export class ArtistPageComponent {
  artistas: Array<Artista> = [
    {
      img: "/assets/imgs/sayu-img.PNG",
      nome: "Sayuri Yoza",
      cargo: "Tattoo Artist"
    },
    {
      img: "/assets/imgs/guaxi-img.jpg",
      nome: "Guaxi Teste",
      cargo: "Teste Cargo"
    },
    // Dps ver negocio para mais
  ];
}
