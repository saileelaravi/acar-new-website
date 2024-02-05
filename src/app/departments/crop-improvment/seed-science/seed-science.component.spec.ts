import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeedScienceComponent } from './seed-science.component';

describe('SeedScienceComponent', () => {
  let component: SeedScienceComponent;
  let fixture: ComponentFixture<SeedScienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeedScienceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SeedScienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
