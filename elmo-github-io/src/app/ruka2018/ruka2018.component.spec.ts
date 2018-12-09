import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ruka2018Component } from './ruka2018.component';

describe('Ruka2018Component', () => {
  let component: Ruka2018Component;
  let fixture: ComponentFixture<Ruka2018Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ruka2018Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ruka2018Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
