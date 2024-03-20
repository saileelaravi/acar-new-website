import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwarenessProgramOnHigherEducationForSchoolStudentsComponent } from './awareness-program-on-higher-education-for-school-students.component';

describe('AwarenessProgramOnHigherEducationForSchoolStudentsComponent', () => {
  let component: AwarenessProgramOnHigherEducationForSchoolStudentsComponent;
  let fixture: ComponentFixture<AwarenessProgramOnHigherEducationForSchoolStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AwarenessProgramOnHigherEducationForSchoolStudentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AwarenessProgramOnHigherEducationForSchoolStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
