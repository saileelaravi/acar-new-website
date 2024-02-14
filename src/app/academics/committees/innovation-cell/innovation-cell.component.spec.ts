import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnovationCellComponent } from './innovation-cell.component';

describe('InnovationCellComponent', () => {
  let component: InnovationCellComponent;
  let fixture: ComponentFixture<InnovationCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InnovationCellComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InnovationCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
