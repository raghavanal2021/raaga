import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nr4Component } from './nr4.component';

describe('Nr4Component', () => {
  let component: Nr4Component;
  let fixture: ComponentFixture<Nr4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nr4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Nr4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
