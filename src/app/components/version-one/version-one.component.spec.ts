import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VersionOneComponent } from './version-one.component';

describe('VersionOneComponent', () => {
  let component: VersionOneComponent;
  let fixture: ComponentFixture<VersionOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VersionOneComponent]
    });
    fixture = TestBed.createComponent(VersionOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
