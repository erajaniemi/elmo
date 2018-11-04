import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrkkiComponent } from './urkki.component';

describe('UrkkiComponent', () => {
  let component: UrkkiComponent;
  let fixture: ComponentFixture<UrkkiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrkkiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrkkiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
