import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParalaxMapsComponent } from './paralax-maps.component';

describe('ParalaxMapsComponent', () => {
  let component: ParalaxMapsComponent;
  let fixture: ComponentFixture<ParalaxMapsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParalaxMapsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParalaxMapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
