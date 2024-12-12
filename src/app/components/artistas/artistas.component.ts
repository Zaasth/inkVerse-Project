import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

export interface Artista {
  id: number;
  img: String;
  nome: String;
  cargo: String;
}

@Component({
  selector: 'app-artistas',
  imports: [RouterModule],
  templateUrl: './artistas.component.html',
  styleUrl: './artistas.component.css'
})
export class ArtistasComponent {

  artistas: Array<Artista> = [
    {
      id: 1,
      img: "/assets/imgs/sayu-img.PNG",
      nome: "Sayuri Yoza",
      cargo: "Tattoo Artist"
    },
    {
      id: 2,
      img: "/assets/imgs/guaxi img.jpg",
      nome: "teste",
      cargo: "teste"
    },
    {
      id: 3,
      img: "/assets/imgs/guaxi img.jpg",
      nome: "teste",
      cargo: "teste"
    },
    {
      id: 4,
      img: "/assets/imgs/guaxi img.jpg",
      nome: "teste",
      cargo: "teste"
    },
    {
      id: 5,
      img: "/assets/imgs/guaxi img.jpg",
      nome: "teste",
      cargo: "teste"
    },
    {
      id: 6,
      img: "/assets/imgs/guaxi img.jpg",
      nome: "teste",
      cargo: "teste"
    },
    {
      id: 7,
      img: "/assets/imgs/guaxi img.jpg",
      nome: "teste",
      cargo: "teste"
    },
    {
      id: 8,
      img: "/assets/imgs/guaxi img.jpg",
      nome: "teste",
      cargo: "teste"
    },
  ]

}
