import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PongalComponent } from './pongal.component';

describe('PongalComponent', () => {
  let component: PongalComponent;
  let fixture: ComponentFixture<PongalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PongalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PongalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
