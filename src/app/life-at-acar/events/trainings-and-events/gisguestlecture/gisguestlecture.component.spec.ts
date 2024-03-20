import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GISGuestlectureComponent } from './gisguestlecture.component';

describe('GISGuestlectureComponent', () => {
  let component: GISGuestlectureComponent;
  let fixture: ComponentFixture<GISGuestlectureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GISGuestlectureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GISGuestlectureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
