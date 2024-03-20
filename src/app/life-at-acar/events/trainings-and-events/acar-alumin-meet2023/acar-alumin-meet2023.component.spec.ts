import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcarAluminMeet2023Component } from './acar-alumin-meet2023.component';

describe('AcarAluminMeet2023Component', () => {
  let component: AcarAluminMeet2023Component;
  let fixture: ComponentFixture<AcarAluminMeet2023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcarAluminMeet2023Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AcarAluminMeet2023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
