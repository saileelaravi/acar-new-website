import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ERISilkwormTraining2022Component } from './erisilkworm-training2022.component';

describe('ERISilkwormTraining2022Component', () => {
  let component: ERISilkwormTraining2022Component;
  let fixture: ComponentFixture<ERISilkwormTraining2022Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ERISilkwormTraining2022Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ERISilkwormTraining2022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
