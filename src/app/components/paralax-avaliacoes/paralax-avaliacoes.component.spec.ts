import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParalaxAvaliacoesComponent } from './paralax-avaliacoes.component';

describe('ParalaxAvaliacoesComponent', () => {
  let component: ParalaxAvaliacoesComponent;
  let fixture: ComponentFixture<ParalaxAvaliacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParalaxAvaliacoesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParalaxAvaliacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
