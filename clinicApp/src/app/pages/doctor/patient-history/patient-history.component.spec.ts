import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientHistoryComponent } from './patient-history.component';

describe('PatientHistoryComponent', () => {
  let component: PatientHistoryComponent;
  let fixture: ComponentFixture<PatientHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatientHistoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
