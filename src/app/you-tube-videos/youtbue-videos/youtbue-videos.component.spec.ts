import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutbueVideosComponent } from './youtbue-videos.component';

describe('YoutbueVideosComponent', () => {
  let component: YoutbueVideosComponent;
  let fixture: ComponentFixture<YoutbueVideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YoutbueVideosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(YoutbueVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
