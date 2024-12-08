import { Component, ElementRef, ViewChild } from '@angular/core';
import { IntersectionService } from '../../services/intersection.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @ViewChild('headersection')observedElement!: ElementRef;
  

  constructor(private intersectionService: IntersectionService) {}

  ngAfterViewInit() { //ciclo de vida do angular
    this.intersectionService.observeElement(this.observedElement); // Inicia o monitoramento
    let classes: string[] = ["animate-fade-down", "animate-once", "animate-duration-1000", "animate-delay-200"];

    // Escutando o evento de visibilidade e aplicando/removendo a classe 'animate'
    this.intersectionService.elementVisible.subscribe(isVisible => {
      if (isVisible) {
        for (let index = 0; index < classes.length; index++) {
          this.observedElement.nativeElement.classList.add(classes[index]);
        }
      } else {
        for (let index = 0; index < classes.length; index++) {
          this.observedElement.nativeElement.classList.remove(classes[index]);
         ;
        }
      }
    });
  }
}
