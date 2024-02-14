import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomendGrievanceCellComponent } from './womend-grievance-cell.component';

describe('WomendGrievanceCellComponent', () => {
  let component: WomendGrievanceCellComponent;
  let fixture: ComponentFixture<WomendGrievanceCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WomendGrievanceCellComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WomendGrievanceCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
