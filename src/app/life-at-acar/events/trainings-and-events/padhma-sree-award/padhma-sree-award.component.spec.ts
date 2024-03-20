import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadhmaSreeAwardComponent } from './padhma-sree-award.component';

describe('PadhmaSreeAwardComponent', () => {
  let component: PadhmaSreeAwardComponent;
  let fixture: ComponentFixture<PadhmaSreeAwardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PadhmaSreeAwardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PadhmaSreeAwardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
