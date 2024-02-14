import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificateCoursesComponent } from './certificate-courses.component';

describe('CertificateCoursesComponent', () => {
  let component: CertificateCoursesComponent;
  let fixture: ComponentFixture<CertificateCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CertificateCoursesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CertificateCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
