import { Component } from '@angular/core';

export interface Artista {
  img: String;
  nome: String;
  cargo: String;
}

@Component({
  selector: 'app-artistas',
  imports: [],
  templateUrl: './artistas.component.html',
  styleUrl: './artistas.component.css'
})
export class ArtistasComponent {

  artistas: Array<Artista> = [
    {
      img: "/assets/imgs/sayu-img.PNG",
      nome: "Sayuri Yoza",
      cargo: "Tattoo Artist"
    },
    {
      img: "/assets/imgs/guaxi img.jpg",
      nome: "teste",
      cargo: "teste"
    },
    {
      img: "/assets/imgs/guaxi img.jpg",
      nome: "teste",
      cargo: "teste"
    },
    {
      img: "/assets/imgs/guaxi img.jpg",
      nome: "teste",
      cargo: "teste"
    },
    {
      img: "/assets/imgs/guaxi img.jpg",
      nome: "teste",
      cargo: "teste"
    },
    {
      img: "/assets/imgs/guaxi img.jpg",
      nome: "teste",
      cargo: "teste"
    },
    {
      img: "/assets/imgs/guaxi img.jpg",
      nome: "teste",
      cargo: "teste"
    },
    {
      img: "/assets/imgs/guaxi img.jpg",
      nome: "teste",
      cargo: "teste"
    },
  ]

}
