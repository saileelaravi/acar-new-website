import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NssDayProgram2023Component } from './nss-day-program2023.component';

describe('NssDayProgram2023Component', () => {
  let component: NssDayProgram2023Component;
  let fixture: ComponentFixture<NssDayProgram2023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NssDayProgram2023Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NssDayProgram2023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
