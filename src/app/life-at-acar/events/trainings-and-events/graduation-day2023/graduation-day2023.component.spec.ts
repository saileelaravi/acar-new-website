import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraduationDay2023Component } from './graduation-day2023.component';

describe('GraduationDay2023Component', () => {
  let component: GraduationDay2023Component;
  let fixture: ComponentFixture<GraduationDay2023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraduationDay2023Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GraduationDay2023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
