import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StwTableComponent } from './stw-table.component';

describe('StwTableComponent', () => {
  let component: StwTableComponent;
  let fixture: ComponentFixture<StwTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StwTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StwTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
