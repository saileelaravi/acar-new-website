import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaboratriesComponent } from './laboratries.component';

describe('LaboratriesComponent', () => {
  let component: LaboratriesComponent;
  let fixture: ComponentFixture<LaboratriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaboratriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LaboratriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
