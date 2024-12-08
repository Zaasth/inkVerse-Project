import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParalaxAboutComponent } from './paralax-about.component';

describe('ParalaxAboutComponent', () => {
  let component: ParalaxAboutComponent;
  let fixture: ComponentFixture<ParalaxAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParalaxAboutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParalaxAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
