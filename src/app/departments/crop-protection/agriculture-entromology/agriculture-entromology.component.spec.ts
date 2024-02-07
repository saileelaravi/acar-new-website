import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgricultureEntromologyComponent } from './agriculture-entromology.component';

describe('AgricultureEntromologyComponent', () => {
  let component: AgricultureEntromologyComponent;
  let fixture: ComponentFixture<AgricultureEntromologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgricultureEntromologyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgricultureEntromologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
