import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcarNewsComponent } from './acar-news.component';

describe('AcarNewsComponent', () => {
  let component: AcarNewsComponent;
  let fixture: ComponentFixture<AcarNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcarNewsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AcarNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
