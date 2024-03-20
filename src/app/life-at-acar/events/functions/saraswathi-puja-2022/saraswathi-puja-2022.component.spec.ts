import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaraswathiPuja2022Component } from './saraswathi-puja-2022.component';

describe('SaraswathiPuja2022Component', () => {
  let component: SaraswathiPuja2022Component;
  let fixture: ComponentFixture<SaraswathiPuja2022Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaraswathiPuja2022Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SaraswathiPuja2022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
