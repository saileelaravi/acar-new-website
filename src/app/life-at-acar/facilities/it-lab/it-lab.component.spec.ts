import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItLabComponent } from './it-lab.component';

describe('ItLabComponent', () => {
  let component: ItLabComponent;
  let fixture: ComponentFixture<ItLabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItLabComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
