import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendlyMatchBwACARHorticultureCollegeJeenurComponent } from './friendly-match-bw-acarhorticulture-college-jeenur.component';

describe('FriendlyMatchBwACARHorticultureCollegeJeenurComponent', () => {
  let component: FriendlyMatchBwACARHorticultureCollegeJeenurComponent;
  let fixture: ComponentFixture<FriendlyMatchBwACARHorticultureCollegeJeenurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FriendlyMatchBwACARHorticultureCollegeJeenurComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FriendlyMatchBwACARHorticultureCollegeJeenurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
