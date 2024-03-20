import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotersDayDrawingCompetitionComponent } from './voters-day-drawing-competition.component';

describe('VotersDayDrawingCompetitionComponent', () => {
  let component: VotersDayDrawingCompetitionComponent;
  let fixture: ComponentFixture<VotersDayDrawingCompetitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VotersDayDrawingCompetitionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VotersDayDrawingCompetitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
