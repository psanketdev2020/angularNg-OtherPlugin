import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgHighchartComponent } from './ng-highchart.component';

describe('NgHighchartComponent', () => {
  let component: NgHighchartComponent;
  let fixture: ComponentFixture<NgHighchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgHighchartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgHighchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
