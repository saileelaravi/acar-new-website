import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgricultureInnovationCompetitionComponent } from './agriculture-innovation-competition.component';

describe('AgricultureInnovationCompetitionComponent', () => {
  let component: AgricultureInnovationCompetitionComponent;
  let fixture: ComponentFixture<AgricultureInnovationCompetitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgricultureInnovationCompetitionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgricultureInnovationCompetitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
