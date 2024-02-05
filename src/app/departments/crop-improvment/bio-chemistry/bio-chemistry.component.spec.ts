import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BioChemistryComponent } from './bio-chemistry.component';

describe('BioChemistryComponent', () => {
  let component: BioChemistryComponent;
  let fixture: ComponentFixture<BioChemistryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BioChemistryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BioChemistryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
