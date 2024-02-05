import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgronomyComponent } from './agronomy.component';

describe('AgronomyComponent', () => {
  let component: AgronomyComponent;
  let fixture: ComponentFixture<AgronomyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgronomyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgronomyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
