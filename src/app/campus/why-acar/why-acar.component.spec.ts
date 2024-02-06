import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyAcarComponent } from './why-acar.component';

describe('WhyAcarComponent', () => {
  let component: WhyAcarComponent;
  let fixture: ComponentFixture<WhyAcarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhyAcarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WhyAcarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
