import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Welcome2acarComponent } from './welcome2acar.component';

describe('Welcome2acarComponent', () => {
  let component: Welcome2acarComponent;
  let fixture: ComponentFixture<Welcome2acarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Welcome2acarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Welcome2acarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
