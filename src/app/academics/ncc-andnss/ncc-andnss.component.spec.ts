import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NccAndnssComponent } from './ncc-andnss.component';

describe('NccAndnssComponent', () => {
  let component: NccAndnssComponent;
  let fixture: ComponentFixture<NccAndnssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NccAndnssComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NccAndnssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
