import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoilScienceComponent } from './soil-science.component';

describe('SoilScienceComponent', () => {
  let component: SoilScienceComponent;
  let fixture: ComponentFixture<SoilScienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoilScienceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SoilScienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
