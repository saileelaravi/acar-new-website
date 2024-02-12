import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodScienceNutritionComponent } from './food-science-nutrition.component';

describe('FoodScienceNutritionComponent', () => {
  let component: FoodScienceNutritionComponent;
  let fixture: ComponentFixture<FoodScienceNutritionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodScienceNutritionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FoodScienceNutritionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
