import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Farewell2022Component } from './farewell-2022.component';

describe('Farewell2022Component', () => {
  let component: Farewell2022Component;
  let fixture: ComponentFixture<Farewell2022Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Farewell2022Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Farewell2022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
