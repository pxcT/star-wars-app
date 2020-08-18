import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarshipsDashboardComponent } from './starships-dashboard.component';

describe('StarshipsDashboardComponent', () => {
  let component: StarshipsDashboardComponent;
  let fixture: ComponentFixture<StarshipsDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarshipsDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarshipsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
