import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MenuComponent } from "../menu/menu.component";

export interface Artista {
  id: number;
  img: string;
  nome: string;
  cargo: string;
  trabalhos: string[];
  descricao: string;
  celular: string;
  instagram: string;
}

@Component({
  selector: 'app-artist-page',
  templateUrl: './artist-page.component.html',
  styleUrls: ['./artist-page.component.css'],
  imports: [CommonModule, MenuComponent]
})
export class ArtistPageComponent implements OnInit {
  artista: Artista | undefined;

  constructor(
    private route: ActivatedRoute
  ){
    this.getArtista();
  }

  ngOnInit(): void {
    
  }

  getArtista() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const artista = this.artistas.find(artist => artist.id === id);
    this.artista = artista;
    return artista;
  }
  
  artistas: Array<Artista> = [
    {
      id: 1,
      img: "/assets/imgs/sayu-img.PNG",
      nome: "Sayuri Tatu",
      cargo: "Tattoo Artist",
      trabalhos: [
        "assets/imgs/trabalhos/Sayuri/trabalho1.jpg",
        "assets/imgs/trabalhos/Sayuri/trabalho2.jpg",
        "assets/imgs/trabalhos/Sayuri/trabalho6.jpg",
        "assets/imgs/trabalhos/Sayuri/trabalho4.jpg",
        "assets/imgs/trabalhos/Sayuri/trabalho5.jpg",
        "assets/imgs/trabalhos/Sayuri/trabalho7.jpg",
        "assets/imgs/trabalhos/Sayuri/trabalho8.jpg"
      ],
      descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu tellus non ligula volutpat convallis. Fusce eget dui nec leo euismod iaculis. Phasellus sit amet blandit odio, consectetur pretium leo. Morbi maximus leo orci, id viverra lacus viverra ac. Integer ipsum metus, lacinia tincidunt dui at, sagittis fringilla ipsum. Donec luctus mauris vel magna finibus tincidunt. Sed vel dolor interdum, molestie lacus ut, varius dolor.",
      celular: "+81 90‑9916‑2903",
      instagram: "@yoza_tattoo"
    },
    {
      id: 2,
      img: "https://example.com/img2.jpg",
      nome: "Maria Oliveira",
      cargo: "Fotógrafa",
      trabalhos: [
        "assets/imgs/trabalhos/Maria/trabalho1.jpg",
        "assets/imgs/trabalhos/Maria/trabalho2.jpg",
        "assets/imgs/trabalhos/Maria/trabalho3.jpg",
        "assets/imgs/trabalhos/Maria/trabalho4.jpg",
        "assets/imgs/trabalhos/Maria/trabalho5.jpg"
      ],
      descricao: "Fotógrafa profissional apaixonada por capturar momentos únicos e criar histórias visuais.",
      celular: "(21) 98765-4321",
      instagram: "@mariaoliveirafoto"
    },
    {
      id: 3,
      img: "https://example.com/img3.jpg",
      nome: "Carlos Lima",
      cargo: "Ilustrador Digital",
      trabalhos: [
        "assets/imgs/trabalhos/Carlos/trabalho1.jpg",
        "assets/imgs/trabalhos/Carlos/trabalho2.jpg",
        "assets/imgs/trabalhos/Carlos/trabalho3.jpg",
        "assets/imgs/trabalhos/Carlos/trabalho4.jpg",
        "assets/imgs/trabalhos/Carlos/trabalho5.jpg"
      ],
      descricao: "Ilustrador especializado em concept art e criação de personagens para jogos e animações.",
      celular: "(31) 99876-5432",
      instagram: "@carloslimaart"
    },
    {
      id: 4,
      img: "https://example.com/img4.jpg",
      nome: "Sayuri Tanaka",
      cargo: "Artista Multimídia",
      trabalhos: [
        "assets/imgs/trabalhos/Sayuri/trabalho1.jpg",
        "assets/imgs/trabalhos/Sayuri/trabalho2.jpg",
        "assets/imgs/trabalhos/Sayuri/trabalho3.jpg",
        "assets/imgs/trabalhos/Sayuri/trabalho4.jpg",
        "assets/imgs/trabalhos/Sayuri/trabalho5.jpg"
      ],
      descricao: "Artista multimídia com experiência em pintura, escultura e arte digital.",
      celular: "(41) 91234-8765",
      instagram: "@sayuritanakaart"
    }
  ];

  selectedImageIndex: number | null = null;

  openImage(index: number): void {
    this.selectedImageIndex = index;
  }

  closeImage(): void {
    this.selectedImageIndex = null;
  }

  nextImage(): void {
    if (this.selectedImageIndex !== null) {
      this.selectedImageIndex = (this.selectedImageIndex + 1) % this.artista!.trabalhos.length;
    }
  }

  prevImage(): void {
    if (this.selectedImageIndex !== null) {
      this.selectedImageIndex =
        (this.selectedImageIndex - 1 + this.artista!.trabalhos.length) % this.artista!.trabalhos.length;
    }
  }
  }
