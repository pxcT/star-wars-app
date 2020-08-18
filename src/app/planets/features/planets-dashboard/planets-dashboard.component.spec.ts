import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetsDashboardComponent } from './planets-dashboard.component';

describe('PlanetsDashboardComponent', () => {
  let component: PlanetsDashboardComponent;
  let fixture: ComponentFixture<PlanetsDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanetsDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
