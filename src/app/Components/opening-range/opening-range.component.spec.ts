import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpeningRangeComponent } from './opening-range.component';

describe('OpeningRangeComponent', () => {
  let component: OpeningRangeComponent;
  let fixture: ComponentFixture<OpeningRangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpeningRangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpeningRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
