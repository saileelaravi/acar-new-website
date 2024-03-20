import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubDayAndHostelDay2022Component } from './club-day-and-hostel-day-2022.component';

describe('ClubDayAndHostelDay2022Component', () => {
  let component: ClubDayAndHostelDay2022Component;
  let fixture: ComponentFixture<ClubDayAndHostelDay2022Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClubDayAndHostelDay2022Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClubDayAndHostelDay2022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
