import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegorobottiComponent } from './legorobotti.component';

describe('LegorobottiComponent', () => {
  let component: LegorobottiComponent;
  let fixture: ComponentFixture<LegorobottiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegorobottiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegorobottiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
