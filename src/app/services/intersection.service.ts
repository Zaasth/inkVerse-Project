import { Injectable } from '@angular/core';
import { ElementRef, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IntersectionService {
  @Output() elementVisible = new EventEmitter<boolean>();

  constructor() { }

  observeElement(elementRef: ElementRef) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        this.elementVisible.emit(entry.isIntersecting); // Emite true ou false baseado na visibilidade
      });
    }, { threshold: 0 });  // 50% do elemento deve estar visível
    observer.observe(elementRef.nativeElement);
  }
}
