import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingOnIntegratedCropManagementComponent } from './training-on-integrated-crop-management.component';

describe('TrainingOnIntegratedCropManagementComponent', () => {
  let component: TrainingOnIntegratedCropManagementComponent;
  let fixture: ComponentFixture<TrainingOnIntegratedCropManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrainingOnIntegratedCropManagementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrainingOnIntegratedCropManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
