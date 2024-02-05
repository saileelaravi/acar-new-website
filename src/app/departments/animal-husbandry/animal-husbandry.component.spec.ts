import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalHusbandryComponent } from './animal-husbandry.component';

describe('AnimalHusbandryComponent', () => {
  let component: AnimalHusbandryComponent;
  let fixture: ComponentFixture<AnimalHusbandryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimalHusbandryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnimalHusbandryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
