import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Elmo7vuottaComponent } from './elmo7vuotta.component';

describe('Elmo7vuottaComponent', () => {
  let component: Elmo7vuottaComponent;
  let fixture: ComponentFixture<Elmo7vuottaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Elmo7vuottaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Elmo7vuottaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
