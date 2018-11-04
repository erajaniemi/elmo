import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Kesaloma2018Component } from './kesaloma2018.component';

describe('Kesaloma2018Component', () => {
  let component: Kesaloma2018Component;
  let fixture: ComponentFixture<Kesaloma2018Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Kesaloma2018Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Kesaloma2018Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
