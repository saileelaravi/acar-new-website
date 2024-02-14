import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WASTEDISPOSALComponent } from './waste-disposal.component';

describe('WASTEDISPOSALComponent', () => {
  let component: WASTEDISPOSALComponent;
  let fixture: ComponentFixture<WASTEDISPOSALComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WASTEDISPOSALComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WASTEDISPOSALComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
