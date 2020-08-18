import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BattlefieldDashboardComponent } from './battlefield-dashboard.component';

describe('BattlefieldDashboardComponent', () => {
  let component: BattlefieldDashboardComponent;
  let fixture: ComponentFixture<BattlefieldDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BattlefieldDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BattlefieldDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
