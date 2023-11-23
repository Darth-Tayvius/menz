import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MenzTripComponent} from './menz-trip.component';

describe('MenzTripComponent', () => {
    let component: MenzTripComponent;
    let fixture: ComponentFixture<MenzTripComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [MenzTripComponent]
        });
        fixture = TestBed.createComponent(MenzTripComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
