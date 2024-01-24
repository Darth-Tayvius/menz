import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenzTripDetailsComponent } from './menz-trip-details.component';

describe('MenzTripDetailsComponent', () => {
  let component: MenzTripDetailsComponent;
  let fixture: ComponentFixture<MenzTripDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenzTripDetailsComponent]
    });
    fixture = TestBed.createComponent(MenzTripDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
