import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParalaxArtistasComponent } from './paralax-artistas.component';

describe('ParalaxArtistasComponent', () => {
  let component: ParalaxArtistasComponent;
  let fixture: ComponentFixture<ParalaxArtistasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParalaxArtistasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParalaxArtistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
