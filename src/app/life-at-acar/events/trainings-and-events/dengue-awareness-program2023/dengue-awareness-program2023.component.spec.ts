import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DengueAwarenessProgram2023Component } from './dengue-awareness-program2023.component';

describe('DengueAwarenessProgram2023Component', () => {
  let component: DengueAwarenessProgram2023Component;
  let fixture: ComponentFixture<DengueAwarenessProgram2023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DengueAwarenessProgram2023Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DengueAwarenessProgram2023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
