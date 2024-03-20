import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TNAUStandingCommitteeVisit2022Component } from './tnaustanding-committee-visit-2022.component';

describe('TNAUStandingCommitteeVisit2022Component', () => {
  let component: TNAUStandingCommitteeVisit2022Component;
  let fixture: ComponentFixture<TNAUStandingCommitteeVisit2022Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TNAUStandingCommitteeVisit2022Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TNAUStandingCommitteeVisit2022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
