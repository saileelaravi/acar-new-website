import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingsAndEventsComponent } from './trainings-and-events.component';

describe('TrainingsAndEventsComponent', () => {
  let component: TrainingsAndEventsComponent;
  let fixture: ComponentFixture<TrainingsAndEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrainingsAndEventsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrainingsAndEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
