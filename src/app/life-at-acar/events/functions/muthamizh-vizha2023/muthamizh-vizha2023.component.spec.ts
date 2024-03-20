import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuthamizhVizha2023Component } from './muthamizh-vizha2023.component';

describe('MuthamizhVizha2023Component', () => {
  let component: MuthamizhVizha2023Component;
  let fixture: ComponentFixture<MuthamizhVizha2023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MuthamizhVizha2023Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MuthamizhVizha2023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
