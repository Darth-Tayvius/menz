import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenzTripHeaderComponent } from './menz-trip-header.component';

describe('MenzTripHeaderComponent', () => {
  let component: MenzTripHeaderComponent;
  let fixture: ComponentFixture<MenzTripHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenzTripHeaderComponent]
    });
    fixture = TestBed.createComponent(MenzTripHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
