import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldVistAndTourComponent } from './field-vist-and-tour.component';

describe('FieldVistAndTourComponent', () => {
  let component: FieldVistAndTourComponent;
  let fixture: ComponentFixture<FieldVistAndTourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FieldVistAndTourComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FieldVistAndTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
