import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationMonitoringCellComponent } from './reservation-monitoring-cell.component';

describe('ReservationMonitoringCellComponent', () => {
  let component: ReservationMonitoringCellComponent;
  let fixture: ComponentFixture<ReservationMonitoringCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReservationMonitoringCellComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReservationMonitoringCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
