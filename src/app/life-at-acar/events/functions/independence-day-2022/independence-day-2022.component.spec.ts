import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndependenceDay2022Component } from './independence-day-2022.component';

describe('IndependenceDay2022Component', () => {
  let component: IndependenceDay2022Component;
  let fixture: ComponentFixture<IndependenceDay2022Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndependenceDay2022Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IndependenceDay2022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
