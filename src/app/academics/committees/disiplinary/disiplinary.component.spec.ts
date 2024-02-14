import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisiplinaryComponent } from './disiplinary.component';

describe('DisiplinaryComponent', () => {
  let component: DisiplinaryComponent;
  let fixture: ComponentFixture<DisiplinaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisiplinaryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DisiplinaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
