import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExposureVisitToNIFTEMAndTNAUComponent } from './exposure-visit-to-niftemand-tnau.component';

describe('ExposureVisitToNIFTEMAndTNAUComponent', () => {
  let component: ExposureVisitToNIFTEMAndTNAUComponent;
  let fixture: ComponentFixture<ExposureVisitToNIFTEMAndTNAUComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExposureVisitToNIFTEMAndTNAUComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExposureVisitToNIFTEMAndTNAUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
