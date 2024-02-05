import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantBreedingComponent } from './plant-breeding.component';

describe('PlantBreedingComponent', () => {
  let component: PlantBreedingComponent;
  let fixture: ComponentFixture<PlantBreedingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlantBreedingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlantBreedingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
