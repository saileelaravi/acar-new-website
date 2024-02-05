import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonTeachingStaffComponent } from './non-teaching-staff.component';

describe('NonTeachingStaffComponent', () => {
  let component: NonTeachingStaffComponent;
  let fixture: ComponentFixture<NonTeachingStaffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NonTeachingStaffComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NonTeachingStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
