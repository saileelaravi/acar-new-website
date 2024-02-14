import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCounsellingCellComponent } from './student-counselling-cell.component';

describe('StudentCounsellingCellComponent', () => {
  let component: StudentCounsellingCellComponent;
  let fixture: ComponentFixture<StudentCounsellingCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentCounsellingCellComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentCounsellingCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
