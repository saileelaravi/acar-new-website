import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentsTeachersMeeting2022Component } from './parents-teachers-meeting-2022.component';

describe('ParentsTeachersMeeting2022Component', () => {
  let component: ParentsTeachersMeeting2022Component;
  let fixture: ComponentFixture<ParentsTeachersMeeting2022Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentsTeachersMeeting2022Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParentsTeachersMeeting2022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
