import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomensDayCelebration2023Component } from './womens-day-celebration-2023.component';

describe('WomensDayCelebration2023Component', () => {
  let component: WomensDayCelebration2023Component;
  let fixture: ComponentFixture<WomensDayCelebration2023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WomensDayCelebration2023Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WomensDayCelebration2023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
