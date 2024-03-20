import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachersDaycelebration2023Component } from './teachers-daycelebration2023.component';

describe('TeachersDaycelebration2023Component', () => {
  let component: TeachersDaycelebration2023Component;
  let fixture: ComponentFixture<TeachersDaycelebration2023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeachersDaycelebration2023Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeachersDaycelebration2023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
