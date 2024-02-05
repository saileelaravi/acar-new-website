import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CropPhysiologyComponent } from './crop-physiology.component';

describe('CropPhysiologyComponent', () => {
  let component: CropPhysiologyComponent;
  let fixture: ComponentFixture<CropPhysiologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CropPhysiologyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CropPhysiologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
