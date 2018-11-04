import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TapahtumatComponent } from './tapahtumat.component';

describe('TapahtumatComponent', () => {
  let component: TapahtumatComponent;
  let fixture: ComponentFixture<TapahtumatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TapahtumatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TapahtumatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
