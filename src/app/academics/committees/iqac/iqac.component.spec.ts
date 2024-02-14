import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IQACComponent } from './iqac.component';

describe('IQACComponent', () => {
  let component: IQACComponent;
  let fixture: ComponentFixture<IQACComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IQACComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IQACComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
