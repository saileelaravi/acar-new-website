import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearDayCelebration2021BatchComponent } from './year-day-celebration-2021-batch.component';

describe('YearDayCelebration2021BatchComponent', () => {
  let component: YearDayCelebration2021BatchComponent;
  let fixture: ComponentFixture<YearDayCelebration2021BatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YearDayCelebration2021BatchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(YearDayCelebration2021BatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
