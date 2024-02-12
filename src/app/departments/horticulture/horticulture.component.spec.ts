import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorticultureComponent } from './horticulture.component';

describe('HorticultureComponent', () => {
  let component: HorticultureComponent;
  let fixture: ComponentFixture<HorticultureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HorticultureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HorticultureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
