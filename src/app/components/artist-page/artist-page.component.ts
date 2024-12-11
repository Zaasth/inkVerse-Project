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
      nome: "Teste 1",
      cargo: "Teste Cargo 1"
    },
    {
      img: "/assets/imgs/guaxi-img.jpg",
      nome: "Teste 2",
      cargo: "Teste Cargo 2"
    },
    {
      img: "/assets/imgs/guaxi-img.jpg",
      nome: "Teste 3",
      cargo: "Teste Cargo 3"
    },
    {
      img: "/assets/imgs/guaxi-img.jpg",
      nome: "Teste 4",
      cargo: "Teste Cargo 4"
    },
    {
      img: "/assets/imgs/guaxi-img.jpg",
      nome: "Teste 5",
      cargo: "Teste Cargo 5"
    },
    {
      img: "/assets/imgs/guaxi-img.jpg",
      nome: "Teste 6",
      cargo: "Teste Cargo 6"
    },
    {
      img: "/assets/imgs/guaxi-img.jpg",
      nome: "Teste 7",
      cargo: "Teste Cargo 7"
    }
  ];

  // Trabalhos de Sayuri
  trabalhos: Array<string> = [
    '/assets/imgs/trabalhos/Sayuri/trabalho1.jpg',
    '/assets/imgs/trabalhos/Sayuri/trabalho2.jpg',
    '/assets/imgs/trabalhos/Sayuri/trabalho3.jpg',
    '/assets/imgs/trabalhos/Sayuri/trabalho4.jpg',
    '/assets/imgs/trabalhos/Sayuri/trabalho5.jpg',
    '/assets/imgs/trabalhos/Sayuri/trabalho6.jpg',
    '/assets/imgs/trabalhos/Sayuri/trabalho7.jpg',
    '/assets/imgs/trabalhos/Sayuri/trabalho8.jpg',
    '/assets/imgs/trabalhos/Sayuri/trabalho9.jpg',
    '/assets/imgs/trabalhos/Sayuri/trabalho10.jpg',
    '/assets/imgs/trabalhos/Sayuri/trabalho11.jpg',
    '/assets/imgs/trabalhos/Sayuri/trabalho12.jpg',
    '/assets/imgs/trabalhos/Sayuri/trabalho13.jpg',
    '/assets/imgs/trabalhos/Sayuri/trabalho14.jpg',
    '/assets/imgs/trabalhos/Sayuri/trabalho15.jpg',
    '/assets/imgs/trabalhos/Sayuri/trabalho16.jpg',
    '/assets/imgs/trabalhos/Sayuri/trabalho17.jpg',
    '/assets/imgs/trabalhos/Sayuri/trabalho18.jpg',
    '/assets/imgs/trabalhos/Sayuri/trabalho19.jpg',
    '/assets/imgs/trabalhos/Sayuri/trabalho20.jpg',

  ];
}
