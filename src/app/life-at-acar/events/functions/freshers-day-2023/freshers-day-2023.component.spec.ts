import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreshersDay2023Component } from './freshers-day-2023.component';

describe('FreshersDay2023Component', () => {
  let component: FreshersDay2023Component;
  let fixture: ComponentFixture<FreshersDay2023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FreshersDay2023Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FreshersDay2023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
