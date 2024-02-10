import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvironmentalScienceComponent } from './environmental-science.component';

describe('EnvironmentalScienceComponent', () => {
  let component: EnvironmentalScienceComponent;
  let fixture: ComponentFixture<EnvironmentalScienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnvironmentalScienceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnvironmentalScienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
