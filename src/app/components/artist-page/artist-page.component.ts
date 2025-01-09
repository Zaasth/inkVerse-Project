import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MenuComponent } from "../menu/menu.component";
import { FooterComponent } from "../footer/footer.component";

export interface Artista {
  id: number;
  img: string;
  nome: string;
  cargo: string;
  trabalhos: string[];
  descricao: string;
  celular: string;
  instagram: string;
  link: String;
  linkwpp: String;
}

@Component({
  selector: 'app-artist-page',
  templateUrl: './artist-page.component.html',
  styleUrls: ['./artist-page.component.css'],
  imports: [CommonModule, MenuComponent, FooterComponent]
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
      nome: "Sayuri Yoza",
      cargo: "Tattoo Artist",
      trabalhos: [
        "assets/imgs/trabalhos/sayu/01.jpg",
        "assets/imgs/trabalhos/sayu/02.jpg",
        "assets/imgs/trabalhos/sayu/03.jpg",
        "assets/imgs/trabalhos/sayu/04.jpg",
        "assets/imgs/trabalhos/sayu/05.jpg",
        "assets/imgs/trabalhos/sayu/06.jpg",
        "assets/imgs/trabalhos/sayu/07.jpg",
        "assets/imgs/trabalhos/sayu/08.jpg"
      ],
      descricao: "Tatuadora aprendiz do estúdio Com tattoos fofinhas e levemente bizarras, desenvolve seu estilo próprio! Entrem no perfil e conheçam o trabalho dela!",
      celular: "+81 90‑9916‑2903",
      instagram: "@yoza_tattoo",
      link: "https://www.instagram.com/yoza_tattoo/",
      linkwpp: "https://api.whatsapp.com/send/?phone=819099162903&text=Gostaria%20de%20agendar%20uma%20sess%C3%A3o.&type=phone_number&app_absent=0"
    },
    {
      id: 2,
      img: "assets/imgs/trabalhos/Ali/job (5).jpg",
      nome: "Ali",
      cargo: "Body Piercing",
      trabalhos: [
        "assets/imgs/trabalhos/Ali/job (1).jpg",
        "assets/imgs/trabalhos/Ali/job (2).jpg",
        "assets/imgs/trabalhos/Ali/job (3).jpg",
        "assets/imgs/trabalhos/Ali/job (4).jpg",
        "assets/imgs/trabalhos/Ali/job (6).jpg",
        "assets/imgs/trabalhos/Ali/job (7).jpg",
        "assets/imgs/trabalhos/Ali/job (8).jpg",
        "assets/imgs/trabalhos/Ali/job (9).jpg",
        "assets/imgs/trabalhos/Ali/job (10).jpg",
        "assets/imgs/trabalhos/Ali/job (11).jpg",
        "assets/imgs/trabalhos/Ali/job (12).jpg",
        "assets/imgs/trabalhos/Ali/job (13).jpg",
        "assets/imgs/trabalhos/Ali/job (14).jpg",
        "assets/imgs/trabalhos/Ali/job (15).jpg",
        "assets/imgs/trabalhos/Ali/job (16).jpg",
        "assets/imgs/trabalhos/Ali/job (17).jpg",
        "assets/imgs/trabalhos/Ali/job (18).jpg",
        "assets/imgs/trabalhos/Ali/job (19).jpg"
      ],
      descricao: "Profissional piercer desde 2017 Participa anualmente dos maiores congressos e conferências de estudo de piercing nacionais e internacionais com 10 certificados na área Trabalhando somente com joalheria de alta qualidade seguindo os padrões de segurança e biocompatibilidade e oferecendo atendimento personalizado com acompanhamento, manutenções e auxílio durante todo o período de cicatrização com as técnicas mais atualizadas e avançadas do mercado atual.",
      celular: "(16) 997214910",
      instagram: "@alipiercer",
      link: "https://www.instagram.com/alipiercer/",
      linkwpp: "https://api.whatsapp.com/send/?phone=16997214910&text=Gostaria%20de%20agendar%20uma%20sess%C3%A3o.&type=phone_number&app_absent=0"
    },
    {
      id: 3,
      img: "assets/imgs/trabalhos/Charles/perfil.jpg",
      nome: "Charles",
      cargo: "Tattoo Artist",
      trabalhos: [
        "assets/imgs/trabalhos/Charles/job (1).jpg",
        "assets/imgs/trabalhos/Charles/job (2).jpg",
        "assets/imgs/trabalhos/Charles/job (3).jpg",
        "assets/imgs/trabalhos/Charles/job (4).jpg",
        "assets/imgs/trabalhos/Charles/job (6).jpg",
        "assets/imgs/trabalhos/Charles/job (7).jpg",
        "assets/imgs/trabalhos/Charles/job (8).jpg",
        "assets/imgs/trabalhos/Charles/job (9).jpg",
        "assets/imgs/trabalhos/Charles/job (10).JPG",
        "assets/imgs/trabalhos/Charles/job (11).JPG",
      ],
      descricao: "Foco em Lettering e fine line",
      celular: "(16) 982185145",
      instagram: "@charlesjohn.tattoo",
      link: "https://www.instagram.com/charlesjohn.tattoo/",
      linkwpp: "https://api.whatsapp.com/send/?phone=16982185145&text=Gostaria%20de%20agendar%20uma%20sess%C3%A3o.&type=phone_number&app_absent=0"
    },
    {
      id: 4,
      img: "assets/imgs/trabalhos/Guaxi/perfil.jpg",
      nome: "Guaxi",
      cargo: "Tattoo Artist",
      trabalhos: [
        "assets/imgs/trabalhos/Guaxi/job (1).jpg",
        "assets/imgs/trabalhos/Guaxi/job (2).jpg",
        "assets/imgs/trabalhos/Guaxi/job (3).jpg",
        "assets/imgs/trabalhos/Guaxi/job (4).jpg",
        "assets/imgs/trabalhos/Guaxi/job (6).jpg",
        "assets/imgs/trabalhos/Guaxi/job (7).jpg",
        "assets/imgs/trabalhos/Guaxi/job (8).jpg",
        "assets/imgs/trabalhos/Guaxi/job (9).jpg",
        "assets/imgs/trabalhos/Guaxi/job (10).jpg",
        "assets/imgs/trabalhos/Guaxi/job (11).jpg",
        "assets/imgs/trabalhos/Guaxi/job (12).jpg",
        "assets/imgs/trabalhos/Guaxi/job (13).jpg"
      ],
      descricao: "Guaxi - + 10 anos de experiência Artista premiado Especialista em realismo e full color Co-proprietário do Inkverse",
      celular: "(16) 992168819 ",
      instagram: "@guaxitattoo",
      link: "https://www.instagram.com/guaxitattoo/",
      linkwpp: "https://api.whatsapp.com/send/?phone=16992168819&text=Gostaria%20de%20agendar%20uma%20sess%C3%A3o.&type=phone_number&app_absent=0"
    },
    {
      id: 5,
      img: "assets/imgs/trabalhos/Lorraine/perfil.jpg",
      nome: "Lorraine",
      cargo: "Body Piercing",
      trabalhos: [
        "assets/imgs/trabalhos/Lorraine/job (1).jpg",
        "assets/imgs/trabalhos/Lorraine/job (2).jpg",
        "assets/imgs/trabalhos/Lorraine/job (3).jpg",
        "assets/imgs/trabalhos/Lorraine/job (4).jpg",
        "assets/imgs/trabalhos/Lorraine/job (6).jpg",
        "assets/imgs/trabalhos/Lorraine/job (7).jpg",
        "assets/imgs/trabalhos/Lorraine/job (8).jpg",
        "assets/imgs/trabalhos/Lorraine/job (9).jpg",
      ],
      descricao: "Aprendiz de @alipiercer Trabalha dentro das diretrizes do safe piercing buscando sempre evolução",
      celular: "(16) 991559599",
      instagram: "@lorrainereis.piercer",
      link: "https://www.instagram.com/lorrainereis.piercer/",
      linkwpp: "https://api.whatsapp.com/send/?phone=16991559599&text=Gostaria%20de%20agendar%20uma%20sess%C3%A3o.&type=phone_number&app_absent=0"
    },
    {
      id: 6,
      img: "assets/imgs/trabalhos/Rafa/perfil.jpeg",
      nome: "Rafa",
      cargo: "Tattoo Artist",
      trabalhos: [
        "assets/imgs/trabalhos/Rafa/job (1).jpg",
        "assets/imgs/trabalhos/Rafa/job (2).jpg",
        "assets/imgs/trabalhos/Rafa/job (3).jpg",
        "assets/imgs/trabalhos/Rafa/job (4).jpg",
        "assets/imgs/trabalhos/Rafa/job (6).jpg",
        "assets/imgs/trabalhos/Rafa/job (7).jpg",
        "assets/imgs/trabalhos/Rafa/job (8).jpg",
        "assets/imgs/trabalhos/Rafa/job (9).jpg",
        "assets/imgs/trabalhos/Rafa/job (10).jpg",
        "assets/imgs/trabalhos/Rafa/job (11).jpg",
      ],
      descricao: "Tatuador premiado 4 anos de experiência Especialista em preto e cinza e realismo Co-proprietário do Inkverse",
      celular: "(16) 992424231",
      instagram: "@rafamossin_",
      link: "https://www.instagram.com/rafamossin_/",
      linkwpp: "https://api.whatsapp.com/send/?phone=16992424231&text=Gostaria%20de%20agendar%20uma%20sess%C3%A3o.&type=phone_number&app_absent=0"
    },
    {
      id: 7,
      img: "assets/imgs/trabalhos/Vitor/perfil.jpg",
      nome: "Vitor Leite",
      cargo: "Tattoo Artist",
      trabalhos: [
        "assets/imgs/trabalhos/Vitor/job (1).jpg",
        "assets/imgs/trabalhos/Vitor/job (2).jpg",
        "assets/imgs/trabalhos/Vitor/job (3).jpg",
        "assets/imgs/trabalhos/Vitor/job (4).jpg",
        "assets/imgs/trabalhos/Vitor/job (6).jpg",
        "assets/imgs/trabalhos/Vitor/job (7).jpg",
        "assets/imgs/trabalhos/Vitor/job (8).jpg",
      ],
      descricao: "Tatuador premiado 4 anos de experiência Especialista em preto e cinza e realismo Co-proprietário do Inkverse",
      celular: "(16) 993052372",
      instagram: "@vitorleitetattoo",
      link: "https://www.instagram.com/vitorleitetattoo/",
      linkwpp: "https://api.whatsapp.com/send/?phone=16993052372&text=Gostaria%20de%20agendar%20uma%20sess%C3%A3o.&type=phone_number&app_absent=0"
    },
    {
      id: 8,
      img: "assets/imgs/trabalhos/Shaw/perfil.jpg",
      nome: "Shaw",
      cargo: "Tattoo Artist",
      trabalhos: [
        "assets/imgs/trabalhos/Shaw/job (1).jpg",
        "assets/imgs/trabalhos/Shaw/job (2).jpg",
        "assets/imgs/trabalhos/Shaw/job (3).jpg",
        "assets/imgs/trabalhos/Shaw/job (4).jpg",
        "assets/imgs/trabalhos/Shaw/job (6).jpg",
        "assets/imgs/trabalhos/Shaw/job (7).jpg",
        "assets/imgs/trabalhos/Shaw/job (8).jpg",
        "assets/imgs/trabalhos/Shaw/job (9).jpg",
        "assets/imgs/trabalhos/Shaw/job (10).jpg",
        "assets/imgs/trabalhos/Shaw/job (11).jpg",
        "assets/imgs/trabalhos/Shaw/job (12).jpg",
        "assets/imgs/trabalhos/Shaw/job (13).jpg",
        "assets/imgs/trabalhos/Shaw/job (14).jpg",
        "assets/imgs/trabalhos/Shaw/job (15).jpg",
      ],
      descricao: "4 anos de experiência, especialista em BlackWork e FineLine",
      celular: "(16) 991887004",
      instagram: "@saanshawtattoo",
      link: "https://www.instagram.com/saanshawtattoo//",
      linkwpp: "https://api.whatsapp.com/send/?phone=16991887004&text=Gostaria%20de%20agendar%20uma%20sess%C3%A3o.&type=phone_number&app_absent=0"
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
