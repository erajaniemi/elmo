import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Annu2019Component } from './annu2019.component';

describe('Annu2019Component', () => {
  let component: Annu2019Component;
  let fixture: ComponentFixture<Annu2019Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Annu2019Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Annu2019Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
