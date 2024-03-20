import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TanfloraVisitComponent } from './tanflora-visit.component';

describe('TanfloraVisitComponent', () => {
  let component: TanfloraVisitComponent;
  let fixture: ComponentFixture<TanfloraVisitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TanfloraVisitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TanfloraVisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
