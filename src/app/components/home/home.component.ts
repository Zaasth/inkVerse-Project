import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { AboutComponent } from "../about/about.component";
import { ArtistasComponent } from "../artistas/artistas.component";
import { ParalaxArtistasComponent } from "../paralax-artistas/paralax-artistas.component";
import { ParalaxAboutComponent } from "../paralax-about/paralax-about.component";
import { ParalaxMapsComponent } from "../paralax-maps/paralax-maps.component";

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, AboutComponent, ArtistasComponent, ParalaxArtistasComponent, ParalaxAboutComponent, ParalaxMapsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
/*
  // Tipagem de variáveis
target: NodeListOf<HTMLElement> = document.querySelectorAll("[data-anime]");

debounce(func: Function, wait: number) {
    let timeout: any;
    return function(this: any) {
        const later = () => {
            timeout = null;
            func.apply(this, arguments);
        };
        if (timeout) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(later, wait);
    };
}

AnimeScroll(): void {
  console.log("cheguei");
    const WindowTop: number = Math.floor(window.scrollY) + ((window.innerHeight * 3) / 4);

    this.target.forEach((element: HTMLElement) => {
        if (WindowTop > element.offsetTop) {
            element.classList.add("animate");
        } else {
            element.classList.remove("animate");
        }
    });
}

// Chamada inicial para animações ao carregar
ngOnInit(){
}

ngDoCheck(){
  this.AnimeScroll();
  if (this.target.length > 0) {
    window.addEventListener("scroll", this.debounce(this.AnimeScroll, 200));
  }
}

*/
}
