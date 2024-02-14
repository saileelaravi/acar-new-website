import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RulesRegulationsComponent } from './rules-regulations.component';

describe('RulesRegulationsComponent', () => {
  let component: RulesRegulationsComponent;
  let fixture: ComponentFixture<RulesRegulationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RulesRegulationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RulesRegulationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
