import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationalAwarnessComponent } from './educational-awarness.component';

describe('EducationalAwarnessComponent', () => {
  let component: EducationalAwarnessComponent;
  let fixture: ComponentFixture<EducationalAwarnessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EducationalAwarnessComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EducationalAwarnessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
