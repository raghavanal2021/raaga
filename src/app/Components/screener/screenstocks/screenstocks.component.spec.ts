import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenstocksComponent } from './screenstocks.component';

describe('ScreenstocksComponent', () => {
  let component: ScreenstocksComponent;
  let fixture: ComponentFixture<ScreenstocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenstocksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenstocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
