import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ranua2019Component } from './ranua2019.component';

describe('Ranua2019Component', () => {
  let component: Ranua2019Component;
  let fixture: ComponentFixture<Ranua2019Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ranua2019Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ranua2019Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
