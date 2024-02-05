import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgriculturalEngineeringComponent } from './agricultural-engineering.component';

describe('AgriculturalEngineeringComponent', () => {
  let component: AgriculturalEngineeringComponent;
  let fixture: ComponentFixture<AgriculturalEngineeringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgriculturalEngineeringComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgriculturalEngineeringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
