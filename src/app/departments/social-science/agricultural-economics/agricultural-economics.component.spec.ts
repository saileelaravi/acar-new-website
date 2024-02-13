import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgriculturalEconomicsComponent } from './agricultural-economics.component';

describe('AgriculturalEconomicsComponent', () => {
  let component: AgriculturalEconomicsComponent;
  let fixture: ComponentFixture<AgriculturalEconomicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgriculturalEconomicsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgriculturalEconomicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
