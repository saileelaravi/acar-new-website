import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterCollegiateTournamentCoimbatoreComponent } from './inter-collegiate-tournament-coimbatore.component';

describe('InterCollegiateTournamentCoimbatoreComponent', () => {
  let component: InterCollegiateTournamentCoimbatoreComponent;
  let fixture: ComponentFixture<InterCollegiateTournamentCoimbatoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterCollegiateTournamentCoimbatoreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InterCollegiateTournamentCoimbatoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
