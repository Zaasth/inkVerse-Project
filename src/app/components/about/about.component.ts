import { Component,ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import {IntersectionService} from '../../services/intersection.service'

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  @ViewChild('aboutsection')observedElement!: ElementRef;
  

  constructor(private intersectionService: IntersectionService) {}

  ngOnInit(){

  }

  ngAfterViewInit() { //ciclo de vida do angular
    this.intersectionService.observeElement(this.observedElement); // Inicia o monitoramento
    let classes: string[] = ["animate-fade-right", "animate-once", "animate-duration-1000", "animate-delay-400"];

    // Escutando o evento de visibilidade e aplicando/removendo a classe 'animate'
    this.intersectionService.elementVisible.subscribe(isVisible => {
      if (isVisible) {
        for (let index = 0; index < classes.length; index++) {
          this.observedElement.nativeElement.classList.add(classes[index]);
        }
        console.log("visivel :D");
      } else {
        for (let index = 0; index < classes.length; index++) {
          this.observedElement.nativeElement.classList.remove(classes[index]);
         ;
        }
        console.log("nun tá ;(");
      }
    });
  }
}
