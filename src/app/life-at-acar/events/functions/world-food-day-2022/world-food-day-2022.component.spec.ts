import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldFoodDay2022Component } from './world-food-day-2022.component';

describe('WorldFoodDay2022Component', () => {
  let component: WorldFoodDay2022Component;
  let fixture: ComponentFixture<WorldFoodDay2022Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorldFoodDay2022Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorldFoodDay2022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
