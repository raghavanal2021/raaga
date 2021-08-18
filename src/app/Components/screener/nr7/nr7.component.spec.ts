import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nr7Component } from './nr7.component';

describe('Nr7Component', () => {
  let component: Nr7Component;
  let fixture: ComponentFixture<Nr7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nr7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Nr7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
