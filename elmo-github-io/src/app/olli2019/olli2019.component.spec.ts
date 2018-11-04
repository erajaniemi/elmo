import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Olli2019Component } from './olli2019.component';

describe('Olli2019Component', () => {
  let component: Olli2019Component;
  let fixture: ComponentFixture<Olli2019Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Olli2019Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Olli2019Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
