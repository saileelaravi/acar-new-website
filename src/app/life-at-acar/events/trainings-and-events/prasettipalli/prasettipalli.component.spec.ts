import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PRASettipalliComponent } from './prasettipalli.component';

describe('PRASettipalliComponent', () => {
  let component: PRASettipalliComponent;
  let fixture: ComponentFixture<PRASettipalliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PRASettipalliComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PRASettipalliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
