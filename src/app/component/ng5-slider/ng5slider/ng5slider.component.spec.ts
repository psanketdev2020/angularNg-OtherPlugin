import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng5sliderComponent } from './ng5slider.component';

describe('Ng5sliderComponent', () => {
  let component: Ng5sliderComponent;
  let fixture: ComponentFixture<Ng5sliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ng5sliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng5sliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
