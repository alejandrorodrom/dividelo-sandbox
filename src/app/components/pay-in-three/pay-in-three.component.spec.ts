import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayInThreeComponent } from './pay-in-three.component';

describe('PayInThreeComponent', () => {
  let component: PayInThreeComponent;
  let fixture: ComponentFixture<PayInThreeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PayInThreeComponent]
    });
    fixture = TestBed.createComponent(PayInThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
