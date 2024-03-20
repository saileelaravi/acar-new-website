import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsDayComponent } from './sports-day.component';

describe('SportsDayComponent', () => {
  let component: SportsDayComponent;
  let fixture: ComponentFixture<SportsDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SportsDayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SportsDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
