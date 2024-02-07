import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantPathologyComponent } from './plant-pathology.component';

describe('PlantPathologyComponent', () => {
  let component: PlantPathologyComponent;
  let fixture: ComponentFixture<PlantPathologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlantPathologyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlantPathologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
